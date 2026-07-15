import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { LoginPayload, User } from "./auth.types";
import { loginApi, meApi } from "../api/auth.apis";

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: (payload: LoginPayload) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const restoreSession = async () => {
      try {
        const currentUser = await meApi();
        setUser(currentUser);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    restoreSession();
  }, []);

  const login = async (payload: LoginPayload) => {
    setLoading(true);

    const response = await loginApi(payload);
    console.log(response);
    localStorage.setItem("ACCESS_TOKEN_KEY", response.accessToken);
    setUser(response.user);
    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem("ACCESS_TOKEN_KEY");
    setUser(null);
  };

  const isAuthenticated = !!user;
  console.log(user);
  console.log(isAuthenticated);

  return (
    <AuthContext.Provider
      value={{ user, loading, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvied");
  }
  return context;
};
