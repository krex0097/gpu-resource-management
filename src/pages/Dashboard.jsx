import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

function Dashboard() {
  return (
    <div className="container">
      <Sidebar />

      <div className="main">
        <TopBar
          title="Dashboard"
          subtitle="Overview of your GPU access"
        />

        <div className="grid">
          <div className="card">
            <h3>Your GPU Status</h3>
            <p><strong>No active allocation</strong></p>
            <small>You can submit a new request</small>
          </div>

          <div className="card">
            <h3>Usage This Month</h3>
            <p><strong>3 hours</strong> used</p>
            <small>Monthly limit: 10 hours</small>
          </div>

          <div className="card">
            <h3>Request Status</h3>
            <p><strong>1 pending request</strong></p>
            <small>Awaiting faculty approval</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
