import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";

const Header = ({ handleMain, main }) => {

    const [menu, setMenu] = useState(false);

    const handleHide = () => {
        setMenu(false);
    }

    return (
        <div className={`header ${main ? "dark" : ""}`}>
            <p className={`myname ${main ? "sp" : ""}`}>&lt;Amarjit/&gt;</p>
            <div  className={`toggle-btn ${main ? "t-btn" : ""}`} onClick={() => setMenu(!menu)}>{menu ? <RxCross1 className="toogle-btn1" /> : <RxHamburgerMenu className="toogle-btn1" />}</div>
            <div className="toogle1" onClick={handleMain}>{main ? <MdOutlineLightMode className={`tg ${main ? "sp" : ""}`} /> : <CiDark className={`tg ${main ? "sp" : ""}`} />}</div>
            <ul className={`un ${menu ? "x1" : ""} ${main ? "dark" : ""}`}>
                <li><a href="#home" onClick={handleHide}><span className={`${main ? "sp" : ""}`}>Home</span></a></li>
                <li><a href="#about" onClick={handleHide}><span className={`${main ? "sp" : ""}`}>About</span></a></li>
                <li><a href="#skills" onClick={handleHide}><span className={`${main ? "sp" : ""}`}>Skills</span></a></li>
                <li><a href="#project" onClick={handleHide}><span className={`${main ? "sp" : ""}`}>Project</span></a></li>
                <li><a href="#contact" onClick={handleHide}><span className={`${main ? "sp" : ""}`}>Contact</span></a></li>
            </ul>
        </div>
    );
};
export default Header;