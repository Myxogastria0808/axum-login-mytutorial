import LoginButton from "./components/Login";
import LogoutButton from "./components/Logout";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <h1>Axum Auth0 Mytutorial</h1>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </>
  );
}

export default App;
