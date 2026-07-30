import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import TryOut from "./pages/TryOut";
import TryOutQuiz from "./pages/TryOutQuiz";
import Progress from "./pages/Progress";
import Ranking from "./pages/Ranking";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/quiz" element={<Quiz />} />
  <Route path="/tryout" element={<TryOut />} />
  <Route path="/tryoutquiz" element={<TryOutQuiz />} />
  <Route path="/progress" element={<Progress />} />
  <Route path="/ranking" element={<Ranking />} />
  <Route path="/dashboard" element={<Dashboard />} />
</Routes>
    </BrowserRouter>
  );
}

export default App;