import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Signup from "./components/signup-page/Signup";
import Login from "./components/login/Login";

function App() {
  return (
    <Router>
      <Route path="/">
        <Homepage />
      </Route>
      <Route exact path="register">
        <Signup />
      </Route>
      <Route exact path="login">
        <Login />
      </Route>
    </Router>
  );
}

export default App;
