import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function ProfileDropdown() {
  const { logout } = useContext(AuthContext);

  return (
    <div className="profile-dropdown-content">
      <p>My Profile</p>
      <button onClick={logout}>Sign Out</button>
    </div>
  );
}

export default ProfileDropdown;
