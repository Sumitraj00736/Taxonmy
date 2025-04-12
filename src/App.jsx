import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="preloader min-h-screen flex items-center justify-center bg-customDarkBlue relative">
          <div className="ring"></div>
          <motion.img
            src="/assets/Taxonmy_logo.png"
            alt="Loading Logo"
            className="logo-loader h-60 w-60 absolute"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </div>
      ) : (
        <>
          <Header />
          <main className="pt-[90px]">
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
