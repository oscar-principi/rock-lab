import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-300">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>
      
      {/* <WhatsAppButton /> */}

      <Footer />
    </div>
  );
}