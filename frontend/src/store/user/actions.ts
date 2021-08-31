export enum ActionTypes {
    PUT_USER = "PUT_USER",
    REMOVE_USER = "REMOVE_USER",
}

export interface User {
    username: string,
    password: string,
    avatar: string,
    email: string,
    _id: string,
}

export const putUser = (user: User) => {
    return {
        type: ActionTypes.PUT_USER,
        payload: user,
    }
}

export const removeUser = () => {
    return {
        type: ActionTypes.REMOVE_USER,
        payload: "",
    }
}

export const login = (email: string, password: string) => (dispatch: any) => {
    fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ email: email, password: password }),
    })
    .then(res => res.json())
    .then(json => {
        dispatch(putUser(json));
        localStorage.setItem("chatUser", JSON.stringify(json));
        window.location.href = "http://localhost:3001/home";
    })
}

export const logout = () => async (dispatch: any) => {
    fetch("http://localhost:3000/user/logout")
        .then(() => {
            dispatch(removeUser());
            localStorage.setItem("chatUser", "");
        })
}

export const updateUsername = (id: string, name: string) => async (dispatch: any) => {
    fetch(`http://localhost:3000/user/updateName/${id}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({ username: name }),
    })
    .then(res => res.json())
    .then(json => {
        dispatch(putUser(json));
        localStorage.setItem("chatUser", JSON.stringify(json));
    })
}

export const updateAvatar = (id: string, avatarImg: File) => async (dispatch: any) => {
    const formData = new FormData();
    formData.append("avatarImg", avatarImg);
    fetch(`http://localhost:3000/user/updateAvatar/${id}`, {
        method: "POST",
        // headers: {
        //     'Content-Type': 'multipart/form-data; boundary=---'
        // },
        body: formData,
    })
    .then(res => res.json())
    .then(json => {
        dispatch(putUser(json));
        localStorage.setItem("chatUser", JSON.stringify(json));
    })
}