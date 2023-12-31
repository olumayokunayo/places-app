import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userId/places" exact>
            <UserPlaces />
          </Route>
          <Route path="/places/new" eaxct>
            <NewPlace />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
