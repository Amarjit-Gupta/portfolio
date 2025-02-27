import { useEffect, useState } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Project from "./Components/Project";
import Skills from "./Components/Skills";

const App = () => {

  const [loader, setLoader] = useState(true);

  const [main, setMain] = useState(() => {
    let rawData = localStorage.getItem("react");
    if (!rawData) {
      return false;
    }
    else {
      return JSON.parse(rawData);
    }
  });

  const handleMain = () => {
    setMain(!main);
  }

  useEffect(() => {
    localStorage.setItem("react", JSON.stringify(main));
  }, [main]);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2500);
  }, []);

  return (
    <div className={` ${main ? "dark" : "p1"}`}>
      {loader ? <div className="loader"><img src="./images/loader.gif" alt="" /></div> : ""}
      <Header handleMain={handleMain} main={main} />
      <Home />
      <About />
      <Skills />
      <Project main={main} />
      <Contact />
      <Footer main={main} />
    </div>
  );
};
export default App;