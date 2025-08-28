import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Define the user data structure
export interface User {
  id: string;
  username: string;
  email: string;
  roles: string[];
  company: {
    id: number;
    name: string;
    address: string;
  };
}

// Define the context shape
interface UserContextType {
  user: User | null;
  loading: boolean;
  updateUser: (newUserInfo: Partial<User>) => void;
  login: (user: User) => void;
  logout: () => void;
}

// Create the context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Define the provider props
interface UserProviderProps {
  children: ReactNode;
}

// Create the UserProvider component
export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('aa.user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Mock function to update user data
  const updateUser = (newUserInfo: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...newUserInfo };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  const login = (user: User) => {
    setUser(user);
    localStorage.setItem('aa.user', JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('aa.user');
  };

  const value = {
    user,
    loading,
    updateUser,
    login,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// Custom hook to use the UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
