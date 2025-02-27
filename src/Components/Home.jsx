import { useTypewriter } from "react-simple-typewriter";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Home = () => {

  const [typeEffect] = useTypewriter({
    words: ["Full stack developer", "Problem Solver!!", "Continuous Learner...", "Mern developer!!", "Team Player!!", "Coder..."],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 60,
    delaySpeed: 500
  });

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600
    });
  }, []);


  return (
    <div id="home">
      <div className="home-child1" data-aos="zoom-in">
        <div className="txt1">Hello, My name is</div>
        <div className="txt2">Amarjit!</div>
        <div className="txt3">I'm a <span className="typing">{typeEffect}</span></div>
        <div className="txt4"><a href="#contact">Contact</a></div>
      </div>
      <div className="home-child2" data-aos="zoom-in"><img src="./images/hero-img.png" alt="" /></div>
    </div>
  );
};
export default Home;