import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/Navbar";
import AppFooter from "./components/Footer";
import AppHome from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <AppNavbar />

        <main className="flex-1">
          <Routes>
            <Route path="/"/>
            <Route path="/store"/>
            <Route path="/gaming"/>
          </Routes>
          <AppHome />
        </main>

        <AppFooter />
      </div>
    </Router>
  );
}

export default App;
