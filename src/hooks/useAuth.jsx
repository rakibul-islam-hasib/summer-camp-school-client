import { useContext } from "react";
import { AuthContext } from "../utilities/providers/AuthProvider";

export const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}