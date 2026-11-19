
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Work from "./pages/Work";
import Insights from "./pages/Insights";
import ContactPage from "./pages/ContactPage";
import Experience from "./pages/Experience";
import Campiq from "./pages/Campiq";
import Challenge from "./pages/Challenge";
import Books from "./pages/Books";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/work" element={<Work />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/campiq" element={<Campiq />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/books" element={<Books />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;