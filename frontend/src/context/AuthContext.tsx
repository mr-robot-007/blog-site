import { createContext, useContext } from "react";

interface AuthContextType {
  authenticated: boolean;
}
const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem("token");
  const authenticated = !!token && token.split(" ")[1] !== "undefined"; // Ensure it's a boolean
  return (
    <AuthContext.Provider value={{ authenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
