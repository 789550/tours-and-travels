import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const WithAuth = ({ children }) => {
    const isLogedin = useSelector(state=> state.auth.isLogedin)
    if (isLogedin) {
        return <>{children}</>
    } else {
        return <Navigate to="/login" replace />
    }
}

export default WithAuth;