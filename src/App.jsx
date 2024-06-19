import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import LogWorkout from "./pages/LogWorkout.jsx"; // Import the new LogWorkout page
import Progress from "./pages/Progress.jsx"; // Import the new Progress page

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/log-workout" element={<LogWorkout />} /> {/* Add the new route */}
      <Route path="/progress" element={<Progress />} /> {/* Add the new route */}
      </Routes>
    </Router>
  );
}

export default App;
