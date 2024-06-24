import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Header from './components/Header';
import About from './pages/about/About';
import Dashboard from './pages/dashboard/Dashboard';
import { Toast, ToastContainer } from 'react-bootstrap';

function App() {
  const [toast, setToast] = useState({ show: false, message: "" });

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: "" }), 3000);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Routes>
          <Route path="/login" element={<Login showToast={showToast} />} />
          <Route path="/register" element={<Register showToast={showToast} />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard/:email" element={<Dashboard />} />
          <Route path="/" element={<Login showToast={showToast} />} />
        </Routes>
      </div>
      <ToastContainer position="top-center" className="p-3">
        <Toast show={toast.show} bg="primary">
          <Toast.Body>{toast.message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}

export default App;
