// // import react, { useState } from 'react'
// import {
//   Route,
//   Routes
// } from "react-router-dom";
// import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Register from './pages/register/Register';
// import Login from './pages/login/Login';
// // import Header from './componentes/Header';
// import About from './pages/about/About';
// import Dashboard from './pages/dashboard/Dasboard';
// // import AuthHeader from './componentes/AuthHeader';
// import Layout from './layouts/Layout';

// function App() {

//   return (
//     <>
//       {/* <Header /> */}
//       {/* <AuthHeader /> */}
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/" element={<Login />} />
//         </Route>
//       </Routes>
//     </>
//   )

// }
// export default App




import { Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import About from './pages/about/About';
import Dashboard from './pages/dashboard/Dasboard';
import Layout from './layouts/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
