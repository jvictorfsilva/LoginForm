import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/" component={Home} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
