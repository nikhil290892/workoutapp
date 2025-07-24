import React, { useState } from "react";

export default function WorkoutLog() {
  const [log, setLog] = useState({ user: "nikhil", notes: "" });

  const handleSubmit = () => {
    fetch("http://localhost:5000/api/logs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(log),
    })
      .then((res) => res.json())
      .then((data) => alert("Log saved!"));
  };

  return (
    <div className="workout-log">
      <h3>Notes / Progress</h3>
      <textarea
        rows="4"
        value={log.notes}
        onChange={(e) => setLog({ ...log, notes: e.target.value })}
      />
      <button onClick={handleSubmit}>Save Log</button>
    </div>
  );
}
