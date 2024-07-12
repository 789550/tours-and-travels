import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import storageHandler from "../../helper/storageHandler";

const Dashboard = () => {
  const [email, setEmail] = useState("");
  const isLogedin = useSelector((state) => state.auth.isLogedin);

  useEffect(() => {
    if (isLogedin) {
      const data = storageHandler.getLocalData();
      setEmail(data?.email);
    } else {
      setEmail("");
    }
  }, [isLogedin]);

  return (
    <h1 className="text-white">
      Dashboard: <span style={{ fontSize: '22px', color: 'white' }}>{email}</span>
    </h1>
  );
};

export default Dashboard;
