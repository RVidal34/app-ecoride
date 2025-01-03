import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Carpools from "../views/Carpools";
import Contact from "../views/Contact";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carpools" element={<Carpools />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
