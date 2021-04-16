import React, { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { useDispatch, useSelector } from "react-redux";
import PlayerPage from "./pages/PlayerPage";
import ExplorePage from "./pages/ExplorePage";
import { selectUser, setUser } from "./features/user/userSlice";
import db, { auth } from "./firebase";
import Playlist from "./pages/Playlist";
import { addSong, selectPlat } from "./features/player/playerSlice";
import NewPlayer from "./pages/NewPlayer";
import API from "@aws-amplify/api";
import awsmobile from "./aws-exports";

function App() {
  const [check, setCheck] = useState(false);
  const user = useSelector(selectUser);
  const plat = useSelector(selectPlat);
  const dispatch = useDispatch();
  useEffect(() => {
    API.configure(awsmobile);
    if (check) {
      db.collection("users")
        .doc(user.email)
        .onSnapshot((snapshot) => {
          let data = snapshot.data();
          dispatch(
            addSong({
              songId: data.id,
              songName: data.name,
              playing: data.playing,
              artW: data.artW,
              vol: data.vol,
              plat: data.type,
            })
          );
        });
    }
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //if the user loged in
        dispatch(
          setUser({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
            plat: null,
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
                vol: 100,
                artW: null,
              });
            } else {
              setCheck(true);
            }
          });
      }
    });
  }, [dispatch, plat, check]);
  return (
    <Router>
      <Switch>
        {!user ? (
          <>
            <Route path="/" exact component={HomePage} />
            <Route path="/display" exact component={HomePage} />
            <Route path="/remote" exact component={HomePage} />
            <Route path="/login" component={LoginPage} />
          </>
        ) : (
          <>
            <Route path="/display" exact component={PlayerPage} />
            <Route path="/player" exact component={NewPlayer} />
            <Route path="/remote" exact component={ExplorePage} />
            {/* <Route path="/login" exact component={NewPlayer} /> */}
            {/* <Route path="/" exact component={NewPlayer} /> */}
            <Route path="/login" exact component={ExplorePage} />
            <Route path="/playlist" exact component={Playlist} />
            <Route path="/" exact component={ExplorePage} />
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
