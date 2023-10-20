import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Layout/Header";
import Nav from "./components/Layout/Nav";
import Footer from "./components/Layout/Footer";

import ContactoPage from "./pages/ContactoPage";
import HomePage from "./pages/HomePages";
import NosotrosPage from "./pages/NosotrosPage";
import NovedadesPage from "./pages/NovedadesPage";

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/nosotros" exact element={<NosotrosPage />} />
        <Route path="/novedades" exact element={<NovedadesPage />} />
        <Route path="/contacto" exact element={<ContactoPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
