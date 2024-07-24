import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import AuthHeader from "../components/AuthHeader";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../reduxStore/authSlice";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaGoogle, FaWhatsapp } from "react-icons/fa";

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
      {user?.email ? <AuthHeader user={user} logout={handleLogout} /> : <Header />}
      <Outlet context={{ setUser }} />
    </>
  );
};

export default Layout;
