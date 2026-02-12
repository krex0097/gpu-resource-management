import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import { submitGpuRequest } from "../services/gpuRequestService";

function RequestGPU() {
  const [gpu, setGpu] = useState("Any available GPU");
  const [purpose, setPurpose] = useState("Course Project");
  const [hours, setHours] = useState("");
  const [remarks, setRemarks] = useState("");

  async function handleSubmit() {
    await submitGpuRequest({
      gpu,
      purpose,
      hours,
      remarks
    });

    // ✅ Reset form after submit
    setGpu("Any available GPU");
    setPurpose("Course Project");
    setHours("");
    setRemarks("");

    alert("Request submitted (mock)");
  }

  return (
    <div className="container">
      <Sidebar />

      <div className="main">
        <TopBar title="Request GPU Access" />

        <div className="card request-card">
          {/* GPU Requirement */}
          <label>GPU Requirement</label>
          <select value={gpu} onChange={(e) => setGpu(e.target.value)}>
            <option>Any available GPU</option>
            <option>NVIDIA RTX 3090</option>
            <option>NVIDIA A100</option>
          </select>

          {/* Purpose */}
          <label>Purpose</label>
          <select value={purpose} onChange={(e) => setPurpose(e.target.value)}>
            <option>Course Project</option>
            <option>Machine Learning</option>
            <option>Deep Learning</option>
            <option>Research Work</option>
          </select>

          {/* Duration */}
          <label>Expected Duration (hours)</label>
          <input
            type="number"
            placeholder="e.g. 2"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          />

          {/* Remarks */}
          <label>Remarks</label>
          <textarea
            rows="3"
            placeholder="Brief description of your task"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          />

          <button onClick={handleSubmit}>Submit Request</button>
        </div>
      </div>
    </div>
  );
}

export default RequestGPU;
