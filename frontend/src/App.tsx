import "./App.css";
import { useState, useEffect } from "react";

interface HealthResponse {
  status: string;
  hero: string;
}

function App() {
  const [hero, setHero] = useState<string>("Checking");

  useEffect(() => {
    fetch("http://localhost:8000/health")
      .then((res) => res.json())
      .then((data: HealthResponse) => setHero(data.hero))
      .catch(() => setHero("Error"));
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-100">
      <div className="bg-gray-800 text-white rounded-xl px-10 py-12 shadow-lg text-center">
        <h1 className="text-5xl font-extrabold text-purple-500 mb-8">
          FOCUS QUEST
        </h1>
        <p className="text-sm text-gray-400 mb-8">Server status: {hero}</p>

        <button
          className="
            bg-green-500
            hover:bg-yellow-600
            text-white
            font-semibold
            px-8
            py-3
            rounded-full
            transition
          "
        >
          Start Adventure
        </button>
      </div>
    </div>
  );
}

export default App;
