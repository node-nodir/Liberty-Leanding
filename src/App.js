import { Routes, Route } from "react-router-dom";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Contact from "./Components/Contact/Contact";
import SecondPage from "./Components/SecondPage/SecondPage";

function App() {
  return (
    <div className="bg-[#181818]">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
