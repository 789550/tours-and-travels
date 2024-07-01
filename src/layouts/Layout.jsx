import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import AuthHeader from "../components/AuthHeader";
import storageHandler from "../helper/storageHandler";
import { useEffect, useState } from "react";

const Layout = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    const authData = storageHandler.getLocalData();
    setUser(authData);
  };

  const logout = () => {
    storageHandler.removeLocalData("tt_auth");
    setUser(null);
    navigate("/login");
  };

  return (
    <>
      {user?.email ? <AuthHeader user={user} logout={logout} /> : <Header />}
      <Outlet context={{ setUser }} />
    </>
  );
};

export default Layout;
