import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";

function App() {
  return (
    <Router>
      <Route path="/">
        <Homepage />
      </Route>
    </Router>
  );
}

export default App;
