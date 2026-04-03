import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen text-white">

        {/* Background Image */}
        <div
          className="fixed inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg.jpg')" }}
        />

        {/* Overlay */}
        <div className="fixed inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;