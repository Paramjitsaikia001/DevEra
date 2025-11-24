import { Navigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../Context/user.context";

export default function ProtectedRoute({ children }) {
  const { isAuthanticate } = useContext(UserContext);

  if (!isAuthanticate) return <Navigate to="/traintoexcellency/Frontend-build/" replace />;
  return children;
}