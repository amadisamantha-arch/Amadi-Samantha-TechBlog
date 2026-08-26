import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import JourneyPage from "./pages/JourneyPage";
import JourneyArticle from "./pages/JourneyArticle";
import ProjectArticle from "./pages/ProjectArticle";
import CompanyProjectArticle from "./pages/CompanyProjectArticle";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-ink">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/journey/:slug" element={<JourneyArticle />} />
          <Route path="/journey/:slug/:secondSlug" element={<ProjectArticle />} />
          <Route path="/journey/:slug/:companySlug/:projectSlug" element={<CompanyProjectArticle />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;