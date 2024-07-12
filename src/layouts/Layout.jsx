
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import AuthHeader from "../components/AuthHeader";
import storageHandler from "../helper/storageHandler";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../reduxStore/authSlice";

const Layout = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isLogedin);

  useEffect(() => {
    getUser();
  }, [auth]);

  const getUser = () => {
    const authData = storageHandler.getLocalData();
    setUser(authData);
  };

  const handleLogout = () => {
    storageHandler.removeLocalData("tt_auth");
    setUser(null);
    dispatch(logout());
    navigate("/login");
     //if (!auth) {
    //  navigate("/login");
    // }
  };

  return (
    <>
      {user?.email ? <AuthHeader user={user} logout={handleLogout} /> : <Header />}
      <Outlet context={{ setUser }} />
    </>
  );
};

export default Layout;
