import { createContext, useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { auth, database } from "services/firebase";

export const AuthContext = createContext(null);

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const history = useHistory();

  const logInWithGoogle = useCallback(async () => {
    const provider = new auth.GoogleAuthProvider();
    const Auth = auth.getAuth();

    try {
      const result = await auth.signInWithPopup(Auth, provider);

      if (result.user) {
        const { displayName, photoURL, uid } = result.user;

        if (!displayName || !photoURL) {
          throw new Error("Missing information from Google Account");
        }

        setUser({ name: displayName, avatar: photoURL, id: uid });

        const db = database.getDatabase();

        await database.set(database.ref(db, `workspace/` + uid), {
          id: uid,
          owner: {
            name: displayName,
            id: uid,
            avatar: photoURL,
          },
        });

        history.push(`/home`);
      }
    } catch (error) {
      console.log(error);
    }
  }, [history]);

  const logOut = useCallback(async () => {
    const authRef = auth.getAuth();

    auth.signOut(authRef).then(() => {
      history.push("/");
    });
  }, [history]);

  useEffect(() => {
    const Auth = auth.getAuth();
    const unsubscribe = auth.onAuthStateChanged(Auth, (user) => {
      if (user) {
        const { displayName, photoURL, uid } = user;

        if (!displayName || !photoURL) {
          throw new Error("Missing information from Google Account");
        }
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });

        //history.push("/home");
      } else {
        history.push("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, [history]);

  return (
    <AuthContext.Provider value={{ user, logInWithGoogle, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
