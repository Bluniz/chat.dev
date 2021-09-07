import { createContext, useEffect, useState } from "react";
import { auth } from "services/firebase";

export const AuthContext = createContext(null);

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const logInWithGoogle = async () => {
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
      }
    } catch (error) {
      console.log(error);
    }
  };

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
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, logInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
}
