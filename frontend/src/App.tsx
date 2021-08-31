import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import { useDispatch } from "react-redux";
import MainPageContainer from './pages/main/container';
import { RegisterPage } from './pages/register/index';
import LoginPageContainer from "./pages/login/conatiner";
import { putUser } from "./store/user/actions";
import CabinetContainer from './pages/cabinet/container';

function App() {
  const dispatch = useDispatch();
  let user = localStorage.getItem("chatUser");
  if (user) {
    let userJson = JSON.parse(user);
    dispatch(putUser(userJson));
  }
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPageContainer} />
        <Route path="/home" exact component={MainPageContainer} />
        <Route path="/cabinet" exact component={CabinetContainer} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/login" exact component={LoginPageContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
