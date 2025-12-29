import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/Navbar";
import AppFooter from "./components/Footer";
import AppHome from "./pages/Home";
import AppAbout from "./pages/About";
import AppTemplates from "./pages/Templates.tsx";
import AppGames from "./pages/Games";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <AppNavbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<AppHome />} />
            <Route path="/about" element={<AppAbout />} />
            <Route path="/templates" element={<AppTemplates />} />
            <Route path="/games" element={<AppGames />} />
          </Routes>
        </main>

        <AppFooter />
      </div>
    </Router>
  );
}

export default App;
