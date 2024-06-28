import { Outlet, useNavigate } from "react-router-dom";
import Header from "../componentes/Header";
import AuthHeader from "../componentes/AuthHeader";
import storageHandler from "../helper/storageHandler";
import { useEffect, useState } from "react";
const Layout = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getUser();
    }, [])
    
    const getUser = () => {
        const authData = storageHandler.getLocalData();
        setUser(authData);
    }

    const logout = () => {
        storageHandler.removeLocalData("tt_auth");
        setUser(null);
        navigate("/")
    }

    return (
        <>
            {user ? <AuthHeader user={user} logout={logout} /> : <Header />}
            <Outlet />
        </>
    )
}

export default Layout;

// import { useEffect, useState } from "react";
// import { Outlet, useNavigate } from "react-router-dom";
// import Header from "../componentes/Header";
// import AuthHeader from "../componentes/AuthHeader";
// import storageHandler from "../helper/storageHandler";

// const Layout = () => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     getUser();
//   }, []);

//   const getUser = () => {
//     const authData = storageHandler.getLocalData();
//     if (authData) {
//       setUser(authData);
//     } else {
//       setUser(null);
//     }
//   };

//   const logout = () => {
//     storageHandler.removeLocalData("tt_auth");
//     setUser(null);
//     navigate("/login");
//   };

//   return (
//     <>
//       {user ? <AuthHeader user={user} logout={logout} /> : <Header />}
//       <Outlet context={{ user }} />
//     </>
//   );
// };

// export default Layout;




// import { Outlet } from "react-router-dom"
// import AuthHeader from "../componentes/AuthHeader"
// import Header from "../componentes/Header"
// import storageHandler from "../helper/storageHandler"


// const Layout=()=>{

//     let user = storageHandler.getLocalData();
    
//     return(
//     <>
//     {
//         user ? <AuthHeader></AuthHeader> : <Header></Header>
//     }
//         <Outlet></Outlet>
//     </>
//     )
// }

// export default Layout