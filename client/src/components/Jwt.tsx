import { GetTokenSilentlyOptions } from "@auth0/auth0-react";
import { Dispatch, FC } from "react";

type Props = {
  setToken: Dispatch<React.SetStateAction<string>>;
  getAccessTokenSilently: (
    options?: GetTokenSilentlyOptions
  ) => Promise<string>;
};

const Jwt: FC<Props> = (props) => {
  const handleJwt = async () => {
    const token: string = await props.getAccessTokenSilently();
    props.setToken(token);
  };
  return <button onClick={handleJwt}>Show JWT</button>;
};

export default Jwt;
