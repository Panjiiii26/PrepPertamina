import { useEffect, useState } from "react";

function Timer({ menit = 20, onTimeUp }) {
  const [time, setTime] = useState(menit * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
  clearInterval(interval);

  if (onTimeUp) {
    onTimeUp();
  }

  return 0;
}

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const m = Math.floor(time / 60);
  const s = time % 60;

  return (
    <h3 style={{ color: "#E30613" }}>
      ⏰ {m}:{s.toString().padStart(2, "0")}
    </h3>
  );
}

export default Timer;