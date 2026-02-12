import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import RequestGPU from "./pages/RequestGPU";
import Profile from "./pages/Profile";

function App() {
  const { user } = useContext(AuthContext);

  if (!user) return <Login />;

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/request" element={<RequestGPU />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
