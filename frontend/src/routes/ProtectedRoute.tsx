import { type ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}: {children: ReactNode}) => {

    const toke = localStorage.getItem("token");

    if(!toke) {
        return <Navigate to="/login" />
    }

    return children;
}

export default ProtectedRoute