import { UseAuth } from "contexts/auth/hook";

export function Login() {
  const { user, logInWithGoogle } = UseAuth();

  const handleLogIn = async () => {
    await logInWithGoogle();
  };

  return (
    <div>
      <div>
        <h1>login page</h1>
        <button onClick={handleLogIn}>LogIn</button>
        <h2>{user && user?.name}</h2>
      </div>
    </div>
  );
}
