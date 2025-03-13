import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import Jwt from "./Jwt";

const Profile = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();
  const [token, setToken] = useState<string>("");

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user?.picture} alt={user?.name} />
        <p>name: {user?.name}</p>
        <p>email: {user?.email}</p>
        <Jwt
          setToken={setToken}
          getAccessTokenSilently={getAccessTokenSilently}
        />
        <p>jwt: {token}</p>
      </div>
    )
  );
};

export default Profile;
