import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Skills = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600
    });
  }, []);

  return (
    <div id="skills">
      <p className="skills-text"><span>Skills</span></p>
      <div className="skills1">
        <div className="skill-item" data-aos="fade-up"><img src="./images/html.png" alt="" /><p className="skill-txt">HTML</p></div>
        <div className="skill-item" data-aos="fade-up"><img src="./images/css.png" alt="" /><p className="skill-txt">CSS</p></div>
        <div className="skill-item" data-aos="fade-up"><img src="./images/javascript.png" alt="" /><p className="skill-txt">
          Javascript</p></div>
        <div className="skill-item" data-aos="fade-up"><img src="./images/react.png" alt="" /><p className="skill-txt">React JS</p></div>
        <div className="skill-item" data-aos="fade-up"><img src="/images/tailwind.png" alt="" /><p className="skill-txt">Tailwind CSS</p></div>
        <div className="skill-item" data-aos="fade-up"><img src="/images/nodejs.png" alt="" /><p className="skill-txt">Node JS</p></div>
        <div className="skill-item" data-aos="fade-up"><img src="/images/express.png" alt="" /><p className="skill-txt">Express JS</p></div>
        <div className="skill-item" data-aos="fade-up"><img src="/images/mongodb.png" alt="" /><p className="skill-txt">MongoDB</p></div>
        <div className="skill-item" data-aos="fade-up"><img src="/images/mongoose.png" alt="" /><p className="skill-txt">Mongoose</p></div>
        <div className="skill-item" data-aos="fade-up"><img src="/images/postman.png" alt="" /><p className="skill-txt">Postman</p></div>
        <div className="skill-item" data-aos="fade-up"><img src="/images/npm.png" alt="" /><p className="skill-txt">NPM</p></div>
        <div className="skill-item" data-aos="fade-up"><img src="/images/php.png" alt="" /><p className="skill-txt">PHP</p></div>
        <div className="skill-item" data-aos="fade-up"><img src="/images/python.png" alt="" /><p className="skill-txt">Python</p></div>
        <div className="skill-item" data-aos="fade-up"><img src="/images/sql.png" alt="" /><p className="skill-txt">SQL</p></div>
        <div className="skill-item" data-aos="fade-up"><img src="/images/netlify.png" alt="" /><p className="skill-txt">Netlify</p></div>
        <div className="skill-item" data-aos="fade-up"><img src="/images/github.png" alt="" /><p className="skill-txt">Github</p></div>
      </div>
    </div>
  );
};
export default Skills;