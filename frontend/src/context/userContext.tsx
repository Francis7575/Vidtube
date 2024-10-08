import { createContext, useState, useContext, ReactNode } from 'react';

type User = {
  username: string;
  email: string;
};

type UserContextType = {
  isLoggedIn: boolean;
  user: User | null;
  setUser: (formData: User) => void
  setIsLoggedIn: (param: boolean) => void
};

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

const value = {
  user,
  isLoggedIn,
  setUser,
  setIsLoggedIn,
};
return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useAuth = () => useContext(UserContext);

