import { useContext, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import { AuthContext } from "../context/AuthContext";

/**
 * Mock profile stats (later comes from backend)
 */
function getProfileStats() {
  return {
    totalHours: 3,
    monthlyLimit: 10,
    activeAllocation: "No",
    approved: 2,
    pending: 1,
    rejected: 0,
    semester: 4,
    department: "CSE"
  };
}

function Profile() {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    setStats(getProfileStats());
  }, []);

  if (!stats) return null;

  return (
    <div className="container">
      <Sidebar />

      <div className="main">
        <TopBar title="Student Profile" />

        {/* ===== Academic Profile (FULL WIDTH) ===== */}
        <div className="card" style={{ marginBottom: "24px" }}>
          <h3>Academic Profile</h3>

          <div className="profile-grid">
            <div>
              <div className="label">Student Name</div>
              <div className="value">{user.name}</div>
            </div>

            <div>
              <div className="label">Registration Number</div>
              <div className="value">{user.regNo}</div>
            </div>

            <div>
              <div className="label">Department / Section</div>
              <div className="value">
                {stats.department} · {user.section}
              </div>
            </div>

            <div>
              <div className="label">Semester</div>
              <div className="value">{stats.semester}</div>
            </div>
          </div>
        </div>

        {/* ===== LOWER TWO CARDS ===== */}
        <div className="grid">
          <div className="card">
            <h3>GPU Usage Summary</h3>

            <div className="label">Total Hours Used</div>
            <div className="value">{stats.totalHours} hrs</div>

            <div className="label">Monthly Limit</div>
            <div className="value">{stats.monthlyLimit} hrs</div>

            <div className="label">Active Allocation</div>
            <div className="value">{stats.activeAllocation}</div>
          </div>

          <div className="card">
            <h3>Request Statistics</h3>

            <div className="label">Approved Requests</div>
            <div className="value">{stats.approved}</div>

            <div className="label">Pending Requests</div>
            <div className="value">{stats.pending}</div>

            <div className="label">Rejected Requests</div>
            <div className="value">{stats.rejected}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
