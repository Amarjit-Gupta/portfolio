import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {
    
    useEffect(()=>{
        AOS.init({
          offset: 100,
          duration: 600
        });
      },[]);

    return (
        <div id="about">
            <div className="about-text"><span>About Me</span></div>
            <div className="about1">
                <div className="about-child" data-aos="fade-up"><img src="./images/programmer.png" alt="" /></div>
                <div className="about-child" data-aos="fade-up">
                    <p className="about-paragraph">
                        <span>Hello!</span><br/>
                        My name is Amarjit. I enjoy creating things that live on the internet. I am a Web Developer, with strong administrative and communication skills. I craft responsive and visually appealing websites that balance design with functionality. My approach involves understanding your goals and translating them into effective web solutions.Dedicated to quality and user experience, I continuously learn and adapt to new technologies.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default About;