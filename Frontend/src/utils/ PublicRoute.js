import { Navigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../Context/user.context";

export default function PublicRoute({ children }) {
  const { isAuthanticate } = useContext(UserContext);

  if (isAuthanticate) return <Navigate to="/" replace />;
  return children;
}