import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";

//Switch will allow the omponent to load only once if there are multiple components
// # HASH Router works the same #/
function DashboardDesign() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/reports" component={Layout} />
      </Switch>
    </BrowserRouter>
  );
}

export default DashboardDesign;
