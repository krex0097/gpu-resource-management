import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h3>Student Portal</h3>

      <p onClick={() => navigate("/")}>Dashboard</p>
      <p onClick={() => navigate("/request")}>Request GPU</p>
      <p onClick={() => navigate("/profile")}>Profile</p>
    </div>
  );
}

export default Sidebar;
