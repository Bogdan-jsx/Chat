const { MongoClient, GridFSBucket } = require("mongodb");
const mongoose = require("mongoose");
const stream = require("stream");

async function createFile({ file }) {
  const fileId = mongoose.Types.ObjectId();
  await connectBucket((bucket) => createFileByBucket({ file, fileId, bucket }));
  return fileId;
}

function createFileByBucket({ file, fileId, bucket }) {
  const { buffer, originalname, mimetype } = file;
  const bufferStream = new stream.PassThrough();
  bufferStream.end(Buffer.from(buffer));
  const uploadStream = bucket.openUploadStreamWithId(fileId, originalname, {
    contentType: mimetype,
  });
  bufferStream.pipe(uploadStream);
  return new Promise((resolve) => bufferStream.on("finish", resolve));
}

async function connectBucket(cb) {
  return await MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }).then((client) => {
    const db = client.db("chat");
    const bucket = new GridFSBucket(db, { bucketName: "images" });
    return cb(bucket);
  });
}

async function findFile(fileId, res) {
  return await MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }).then((client) => {
    const db = client.db("chat");
    const bucket = new GridFSBucket(db, { bucketName: "images" });
    return bucket
      .find({ _id: mongoose.Types.ObjectId(fileId) })
      .toArray()
      .then(([fileInfo]) => {
        const downloadStream = bucket.openDownloadStreamByName(
          fileInfo.filename
        );
        res.set("Content-Type", fileInfo.contentType);
        downloadStream.pipe(res);
      });
  });
}

module.exports = {
  createFile,
  findFile,
}