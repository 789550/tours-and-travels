import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import AuthHeader from "../components/AuthHeader";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../reduxStore/authSlice";

const Layout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogedin = useSelector((state) => state.auth.isLogedin);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      {isLogedin ? <AuthHeader logout={handleLogout} /> : <Header />}
      <Outlet />
    </>
  );
};

export default Layout;
