import "./styles/style.css";
import { LoginForm } from "./components/loginForm.js";
import { useState, useEffect } from "react";
import { Profile } from "./components/profile.js";
// import image from "./nike.jpg";
function App() {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    profilepic: "",
  });

  const [logState, setLogState] = useState(false);

  const handleUser = (id, n, email, profile) => {
    setUser({ id: id, name: n, email: email, profile: profile });
  };

  const handleLogState = () => {
    return logState ? setLogState(false) : setLogState(true);
  };

  useEffect(() => {
    if (!logState) {
      setUser({
        id: "",
        name: "",
        email: "",
        profilepic: "",
      });
    }
  }, [logState]);

  return (
    <div className="app">
      {logState ? (
        <Profile user={user} handleUser={handleUser} log={handleLogState} />
      ) : (
        <LoginForm handleUser={handleUser} log={handleLogState} />
      )}
    </div>
  );
}

export default App;
