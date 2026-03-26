import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./assets/pages/Home";
import Freelance from "./Pages/Freelance";
import Cursor from "./components/Cursor";
import NewsletterModal from "./components/sections/NewsletterModal";

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hasSubscribed = localStorage.getItem("subscribedToNewsletter");
    if (!hasSubscribed) {
      setShowModal(true);
    }
  }, []);

  const handleSubscribe = () => {
    localStorage.setItem("subscribedToNewsletter", "true");
    setShowModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Cursor />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/freelance" element={<Freelance />} />
      </Routes>

      <NewsletterModal
        open={showModal}
        onSubscribe={handleSubscribe}
        onClose={handleClose}
      />
    </>
  );
}

export default App;