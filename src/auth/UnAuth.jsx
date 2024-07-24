import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UnAuth = ({ children }) => {
    const isLogedin = useSelector(state => state.auth.isLogedin)
    if (!isLogedin) {
        return <>{children}</>
    } else {
        return <Navigate to="/dashboard" replace />
    }
}

export default UnAuth;