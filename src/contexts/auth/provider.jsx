import { createContext, useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { auth, database } from "services/firebase";
import { toastController } from "components/toast";

export const AuthContext = createContext(null);

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const logInWithGoogle = useCallback(async () => {
    setLoading(true);
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
        toastController.success("Bem vindo");
      }
    } catch (error) {
      toastController.error(error);
    } finally {
      setLoading(false);
    }
  }, [history]);

  const logOut = useCallback(async () => {
    const authRef = auth.getAuth();

    auth.signOut(authRef).then(() => {
      history.push("/");
    });
  }, [history]);

  useEffect(() => {
    setLoading(true);
    const Auth = auth.getAuth();
    const unsubscribe = auth.onAuthStateChanged(Auth, (user) => {
      if (user) {
        const { displayName, photoURL, uid } = user;

        if (!displayName || !photoURL) {
          toastController.error("Missing information from Google Account");
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

      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, [history]);

  return (
    <AuthContext.Provider value={{ user, logInWithGoogle, logOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
