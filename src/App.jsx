import { onAuthStateChanged } from "firebase/auth";
import { lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { firebaseAuth } from "./utils/firebase";
import { clearUser, setUser } from "./utils/authSlice";

const AuthenticatedApp = lazy(() => import("./AuthenticatedApp"));
const UnAuthenticatedApp = lazy(() => import("./UnAuthenticatedApp"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(setUser({uid, email, displayName, photoURL}));
      } else { 
        dispatch(clearUser());
      }
    });

    return () => unsubscribe();

  }, []);


  const user = useSelector(store => store.auth.user);

  return user ? <AuthenticatedApp /> : <UnAuthenticatedApp />;
}

export default App;
