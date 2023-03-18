import Contact from "./Components/Contact/Contact";
import Course from "./Components/Course/Course";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";

function App() {
  return (
    <div className="bg-[#181818]">
      <Header />
      <Hero />
      <Course />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
