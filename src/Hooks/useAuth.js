import { useContext } from "react";
import { Authcontext } from "../components/Authprovider/Authprovider";

const useAuth = () => {
  return useContext(Authcontext);
};

export default useAuth;
