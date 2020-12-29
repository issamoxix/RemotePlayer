import React, { useEffect } from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import PlayerPage from "./pages/PlayerPage";
import ChoPage from "./pages/ChoPage";
import ExplorePage from "./pages/ExplorePage";
import { selectUser, setUser } from "./features/user/userSlice";
import db, { auth } from "./db/firebase";
import { selectPlat } from "./features/app/appSlice";
function App() {
  const user = useSelector(selectUser);
  const plat = useSelector(selectPlat);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //if the user loged in
        dispatch(
          setUser({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
            plat: plat,
          })
        );
        db.collection("users")
          .doc(authUser.email)
          .get("user")
          .then((doc) => {
            if (!doc.exists) {
              db.collection("users").doc(authUser.email).set({
                user: authUser.email,
                playing: false,
                name: null,
                type: null,
                id: null,
                vol: 50,
              });
            }
          });
      }
    });
  }, [dispatch, plat]);
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
