import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin() {
    if (!email) {
      setError("Email is required");
      return;
    }

    if (!email.endsWith("@muj.manipal.edu")) {
      setError("Please use your MUJ student email ID");
      return;
    }

    if (!password) {
      setError("Password is required");
      return;
    }

    setError("");

    // Email format: Name.regno@muj.manipal.edu
    const raw = email.split("@")[0];
    const [name, regNo] = raw.split(".");

    login({
      name: name.toUpperCase(),
      email,
      regNo,
      section: "E"
    });
  }

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2 style={{ textAlign: "center" }}>MUJ Student GPU Portal</h2>

        <p style={{ color: "var(--muted)", textAlign: "center" }}>
          Institutional Login
        </p>

        <input
          type="email"
          placeholder="Email (Name.regno@muj.manipal.edu)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error">{error}</p>}

        <button style={{ width: "100%" }} onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
