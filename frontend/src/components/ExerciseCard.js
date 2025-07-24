import React, { useState } from "react";

export default function ExerciseCard({ exercise }) {
  const [completed, setCompleted] = useState(false);

  return (
    <div className={`exercise-card ${completed ? "done" : ""}`}>
      <h4>{exercise.name}</h4>
      <p>{exercise.sets}</p>
      <a href={exercise.youtube} target="_blank" rel="noopener noreferrer">
        Watch Tutorial
      </a>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => setCompleted(!completed)}
        />
        Completed
      </label>
    </div>
  );
}
