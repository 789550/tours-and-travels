import { useParams } from 'react-router-dom';

const Dashboard = () => {
  const { email } = useParams();

  return (
    <div>
      <h1>Dashboard</h1>
      {/* {email && <p>Welcome, {decodeURIComponent(email)}</p>} */}
      {email && <p>Welcome, {email}</p>}
    </div>
  );
};

export default Dashboard;
