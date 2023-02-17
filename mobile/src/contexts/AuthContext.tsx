import { createContext, ReactNode } from 'react';

interface IUserProps {
  name: string;
  avatarUrl: string;
}

interface IAuthContextProps {
  user: IUserProps;
  signIn: () => Promise<void>;
}

interface IAuthProvider {
  children: ReactNode;
}

export const AuthContext = createContext({} as IAuthContextProps);

export function AuthContextProvider({ children }: IAuthProvider) {

  async function signIn() {

  }

  return (
    <AuthContext.Provider value={{
      signIn,
      user: {
        name: 'Erick Augusto',
        avatarUrl: 'https://github.com/ErickSilva2605.png'
      }
    }}>
      {children}
    </AuthContext.Provider>
  );
}