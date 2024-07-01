import { Navigate } from "react-router-dom";
import storageHandler from "../helper/storageHandler";

const WithAuth = ({ children }) => {
    const authData = storageHandler.getLocalData();
    if (authData?.email) {
        return <>{children}</>
    } else {
        return <Navigate to="/login" replace />
    }
}

export default WithAuth;