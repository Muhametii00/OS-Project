import Home from "@pages/Home";
import { Login } from "@pages/Login";
import { useState } from "react";

function App() {
  const [isAuth, setisAuth] = useState(false);
  const handleLogin = () => setisAuth(true);
  const handleLogout = () => setisAuth(false);

  return (
    <div className=" min-h-screen bg-gradient-to-b from-primary to-secondary ">
      {isAuth ? (
        <Home onLogOut={handleLogout} />
      ) : (
        <Login onLogIn={handleLogin} />
      )}
    </div>
  );
}

export default App;
