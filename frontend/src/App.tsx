import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import { MainPage } from './pages/main/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/home" exact component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
