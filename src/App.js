import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { useSelector } from "react-redux";
import PlayerPage from "./pages/PlayerPage";
import { selectUser } from "./features/app/appSlice";
import ChoPage from "./pages/ChoPage";
import ExplorePage from "./pages/ExplorePage";
function App() {
  const user = useSelector(selectUser);
  return (
    <Router>
      <Switch>
        {!user ? (
          <>
            <Route path="/login" exact component={LoginPage} />
            <Route path="/" exact component={HomePage} />
          </>
        ) : (
          <>
            <Route path="/display" exact component={PlayerPage} />
            <Route path="/remote" exact component={ExplorePage} />
            <Route path="/login" exact component={ChoPage} />
            <Route path="/" exact component={ChoPage} />
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
