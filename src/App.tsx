import { useEffect, useState } from "react";
import Home from "./assets/pages/Home";
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

  // Called when the user subscribes
  const handleSubscribe = () => {
    localStorage.setItem("subscribedToNewsletter", "true");
    setShowModal(false);
  };

  // Called when user closes without subscribing
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Cursor />
      <Home />
      <NewsletterModal
        open={showModal}           // ✅ pass open explicitly
        onSubscribe={handleSubscribe}
        onClose={handleClose}
      />
    </>
  );
}

export default App;
