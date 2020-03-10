import React from "react";
import LandingPage from "./Containers/LandingPage";
import Form from "./Containers/Form";
import MarkBot from "./Containers/MarkBot";

import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/markbot" component={MarkBot} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
