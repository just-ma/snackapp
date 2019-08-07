import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Requests from "./pages/Requests/Requests";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/requests" component={Requests} />
      </Switch>
    </Router>
  );
}
export default App;
