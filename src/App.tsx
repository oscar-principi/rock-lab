import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar.tsx";
import Footer from "./components/layout/Footer.tsx";
// import { WhatsAppButton } from "./components/WhatsAppButton";
import Services from "./pages/Services";

import Home from "./pages/Home";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-300">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/servicios" element={<Services />} />
        </Routes>
      </main>
      
      {/* <WhatsAppButton /> */}

      <Footer />
    </div>
  );
}