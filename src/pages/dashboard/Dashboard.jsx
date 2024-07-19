import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <h1 className="text-black">
      Dashboard: <span style={{ fontSize: '22px' }}>{user?.email}</span>
    </h1>
  );
};

export default Dashboard;