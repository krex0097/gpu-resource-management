import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import profileImg from "../assets/User.jpg";

function TopBar({ title, subtitle }) {
  const { user, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!user) return null;

  return (
    <div className="navbar">
      <div>
        <h2>{title}</h2>
        {subtitle && <small>{subtitle}</small>}
      </div>

      <div className="profile-wrapper" ref={wrapperRef}>
        <div
          className="profile-pill"
          onClick={() => setOpen(!open)}
        >
          {user.regNo} · {user.name}
          <img
            src={profileImg}
            alt="Profile"
            className="profile-avatar"
          />

        </div>

        {open && (
          <div className="profile-dropdown">
            <p onClick={() => navigate("/profile")}>My Profile</p>
            <p className="signout" onClick={logout}>
              Sign Out
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TopBar;
