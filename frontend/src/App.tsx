import "./App.css";
import { useState, useEffect } from "react";

const POMOTODO = 25 * 60;
interface HealthResponse {
  status: string;
  hero: string;
}

function formatTime(seconds: number): string {
  const sPart = seconds % 60;
  const mPart = Math.floor(seconds / 60);
  const sStr = sPart.toString().padStart(2, "0");
  const mStr = mPart.toString().padStart(2, "0");
  return mStr + ":" + sStr;
}

function App() {
  const [hero, setHero] = useState<string>("Checking");
  const [timeleft, setTimeLeft] = useState<number>(POMOTODO);
  const [isActive, setIsActive] = useState<boolean>(false);

  const timeButton = () => {
    setIsActive((prev) => !prev);
  };
  useEffect(() => {
    fetch("http://localhost:8000/health")
      .then((res) => res.json())
      .then((data: HealthResponse) => setHero(data.hero))
      .catch(() => setHero("Error"));
  }, []);
  useEffect(() => {
    if (!isActive) return;
    const intervalId = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 0) {
          setIsActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [isActive]);
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-100">
      <div className="bg-gray-800 text-white rounded-xl px-10 py-12 shadow-lg text-center">
        <h1 className="text-5xl font-extrabold text-purple-500 mb-8">
          FOCUS QUEST
        </h1>
        <p className="text-sm text-gray-400 mb-8">Server status: {hero}</p>

        <div className="text-6xl font-mono mb-8">{formatTime(timeleft)}</div>
        <div className="flex flex-col gap-4">
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
          <button
            className={`bg-purple-50 ${isActive ? "text-yellow-950  hover:bg-red-600" : "hover:bg-red-100 hover:text-gray-900"} py-3 px-8 rounded-full transition`}
            onClick={timeButton}
          >
            {isActive ? "暂停" : "继续"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
