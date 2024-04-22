import style from "./App.module.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Hero from "./components/hero/HEro";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/projects/Project";
const App = () => {
  return (
    <div className={style.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
