import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Signup from "./components/signup-page/Signup";
import Login from "./components/login/Login";
import PrivateRoute from "./components/privateroutes/PrivateRoute";
import Userpage from "./components/userpages/Userpage";

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/userpage" component={Userpage} />
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/register">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/" render={() => {
          return (
            <h1 id="notFound">Page not found<br></br>Error: 404</h1>
          )
        }} />
      </Switch>
    </Router>
  );
}

export default App;
