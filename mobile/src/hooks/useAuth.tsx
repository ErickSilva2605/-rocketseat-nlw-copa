import { useContext } from "react";

import { AuthContext, IAuthContextProps } from "../contexts/AuthContext";

export function useAuth(): IAuthContextProps {
  const context = useContext(AuthContext);

  return context;
}