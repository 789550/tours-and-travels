
import { Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import About from './pages/about/About';
import Dashboard from './pages/dashboard/Dashboard';
import Layout from './layouts/Layout';
import WithAuth from "./auth/WithAuth";
import UnAuth from "./auth/UnAuth";

function App() {
  return (
    <>
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<UnAuth><Login /></UnAuth>} />
          <Route path="/register" element={<UnAuth><Register /></UnAuth>} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<WithAuth><Dashboard /></WithAuth>} />
          <Route path="/" element={<UnAuth><Login /></UnAuth>} />
        </Route>
      </Routes>
    </div>
    </>
  );
}

export default App;
