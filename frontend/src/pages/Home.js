import React, { useState, useEffect } from "react";
import ExerciseCard from "../components/ExerciseCard";
import WorkoutLog from "../components/WorkoutLog";

export default function Home() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch("/data/nikhil.json")
      .then((res) => res.json())
      .then((data) => setExercises(data[0].exercises));
  }, []);

  return (
    <div className="container">
      <h2>Today's Workout</h2>
      <div className="exercise-list">
        {exercises.map((ex, index) => (
          <ExerciseCard key={index} exercise={ex} />
        ))}
      </div>
      <WorkoutLog />
    </div>
  );
}
