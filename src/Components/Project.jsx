import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { BsGithub } from "react-icons/bs";
import { PiArrowSquareOutBold } from "react-icons/pi";

const Project = ({ main }) => {

    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 600
        });
    }, []);

    return (
        <div id="project">
            <p className="project-text"><span>My Project</span></p>
            <div className="project1">
                <div className="project-item" data-aos="fade-up">
                    <img src="./images/password.png" alt="" />
                    <p className="project-paragraph"> It generates customizable passwords based on user-selected criteria such as uppercase letter, lowercase letter, numbers, and symbols. It also features password length customization and copy functionality.</p>
                    <div className="link-btn">
                        <div className="link-btn1"><a href="https://github.com/Amarjit-Gupta/password-generator" target="_blank"><BsGithub className={` ${main ? "link-btn2" : ""}`} /></a></div>
                        <div className="link-btn1"><a href="https://mypassword-generator01.netlify.app/" target="_blank"><PiArrowSquareOutBold className={` ${main ? "link-btn2" : ""}`} /></a></div>
                    </div>
                </div>
                <div className="project-item" data-aos="fade-up">
                    <img src="./images/ecommerce.png" alt="" />
                    <p className="project-paragraph">This project is a responsive e-commerce website featuring product categories, a dynamic image slider, and interactive product pages. It includes a loader, animations, and a contact form for user engagement.</p>
                    <div className="link-btn">
                        <div className="link-btn1"><a href="https://github.com/Amarjit-Gupta/project" target="_blank"><BsGithub className={` ${main ? "link-btn2" : ""}`} /></a></div>
                        <div className="link-btn1"><a href="https://amarjit-gupta.github.io/project/" target="_blank"><PiArrowSquareOutBold className={` ${main ? "link-btn2" : ""}`} /></a></div>
                    </div>
                </div>
                <div className="project-item" data-aos="fade-up">
                    <img src="./images/weather.png" alt="" />
                    <p className="project-paragraph">This is a weather app built with React, allowing us to search weather details by city. It displays temperature,humidity, wind speed,and temperature,with a light/dark mode toggle and loading indicator.</p>
                    <div className="link-btn">
                        <div className="link-btn1"><a href="https://github.com/Amarjit-Gupta/weather-app" target="_blank"><BsGithub className={` ${main ? "link-btn2" : ""}`} /></a></div>
                        <div className="link-btn1"><a href="https://weather-app-015.netlify.app/" target="_blank"><PiArrowSquareOutBold className={` ${main ? "link-btn2" : ""}`} /></a></div>
                    </div>
                </div>
                <div className="project-item" data-aos="fade-up">
                    <img src="./images/todo.png" alt="" />
                    <p className="project-paragraph">This todo list allows us to add,edit,delete,clear all tasks and mark tasks as complete. It saves tasks in localstorage and features a colorful, animated background with custom-styled input and buttons.</p>
                    <div className="link-btn">
                        <div className="link-btn1"><a href="https://github.com/Amarjit-Gupta/todo-list01" target="_blank"><BsGithub className={` ${main ? "link-btn2" : ""}`} /></a></div>
                        <div className="link-btn1"><a href="https://todo-list125.netlify.app/" target="_blank"><PiArrowSquareOutBold className={` ${main ? "link-btn2" : ""}`} /></a></div>
                    </div>
                </div>
                <div className="project-item" data-aos="fade-up">
                    <img src="./images/temprature.png" alt="" />
                    <p className="project-paragraph">This project is a temperature conversion tool
                        that converts Celsius, Fahrenheit, Kelvin, and Reaumur scales. It has live updates by JS, done UI with a responsive design, and clear reset button.</p>
                    <div className="link-btn">
                        <div className="link-btn1"><a href="https://github.com/Amarjit-Gupta/Temperature01" target="_blank"><BsGithub className={` ${main ? "link-btn2" : ""}`} /></a></div>
                        <div className="link-btn1"><a href="https://amarjit-gupta.github.io/Temperature01/" target="_blank"><PiArrowSquareOutBold className={` ${main ? "link-btn2" : ""}`} /></a></div>
                    </div>
                </div>
                <div className="project-item" data-aos="fade-up">
                    <img src="./images/signup.png" alt="" />
                    <p className="project-paragraph">This e-commerce web app allows us to sign up, log in, manage products, and perform CRUD operations. Features include product listing, adding, editing, deleting, searching, and secure authentication with private routes.</p>
                    <div className="link-btn">
                        <div className="link-btn1"><a href="https://github.com/Amarjit-Gupta/mern-project-new" target="_blank"><BsGithub className={` ${main ? "link-btn2" : ""}`} /></a></div>
                        <div className="link-btn1"><a href="https://frontend-uy35.onrender.com/" target="_blank"><PiArrowSquareOutBold className={`${main ? "link-btn2" : ""}`} /></a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Project;