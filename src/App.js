import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Signup from "./components/signup-page/Signup";
import Login from "./components/login/Login";
import PrivateRoute from "./components/privateroutes/PrivateRoute";
import Userpage from "./components/userpages/Userpage";

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/userpage" component={Userpage} />
        <Route exact path="/register">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/procedures" component={Homepage} />
        <Route path="/" render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  );
}

export default App;
