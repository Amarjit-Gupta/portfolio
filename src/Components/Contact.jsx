import { IoMdContact } from "react-icons/io";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);
    const [loading,setLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name || !email || !message) {
            setError(true);
            return false;
        }
        else if(name.trim() && email.trim() && message.trim()) {
            setLoading(true);
            const serviceId = 'service_hmhjr5i';
            const templateId = 'template_w8wkgs6';
            const publicKey = 'm55RaAP3ctfXwOutb';

            const templateParams = {
                from_name: name,
                from_email: email,
                to_name: 'Amarjit',
                message: message
            };

            emailjs.send(serviceId, templateId, templateParams, publicKey)
                .then((response) => {
                    toast.success("Message send successfully...");
                    setName('');
                    setEmail('');
                    setMessage('');
                    setError(false);
                    setLoading(false);
                })
                .catch((error) => {
                    toast.error("Failed, try again...");
                    setName('');
                    setEmail('');
                    setMessage('');
                    setError(false);
                    setLoading(false);
                });
                
        }
        else{
            toast.warn("white space not allowed...");
        }
    }

    const handleNumber = () => {
        navigator.clipboard.writeText("9696587251");
        toast.success("Contact number copied...");
    }

    const handleEmail = () => {
        navigator.clipboard.writeText("guptaamarjit777@gmail.com");
        toast.success("Email Id copied...");
    }

    useEffect(()=>{
        AOS.init({
          offset: 100,
          duration: 600
        });
      },[]);

    return (
        <div id="contact">
            <ToastContainer />
            <p className="contact-text"><span>Contact Me</span></p>
            <div className="contact1">
                <div className="contact-item" data-aos="fade-up">
                    <form onSubmit={handleSubmit}>
                        <div className="form-data">
                            <div className="f1">
                                <label>Name:</label><br />
                                <input className="form-data1" type="text" name="" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                                {error && !name ? <span className="error-field">This field is required.</span> : null}
                            </div>
                            <div className="f1">
                                <label>Email Id:</label><br />
                                <input className="form-data2" type="email" name="" placeholder="Enter email id" value={email} onChange={(e) => setEmail(e.target.value)} />
                                {error && !email ? <span className="error-field">This field is required.</span> : null}
                            </div>
                            <div className="f1">
                                <label>Message:</label><br />
                                <textarea className="form-data3" name="" placeholder="Enter message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                {error && !message ? <span className="error-field">This field is required.</span> : null}  
                            </div>
                            <div className="sub-btn">
                                <button type="submit" className="submit-btn">Send Message {loading?<span className="send-form"><img src="./images/loader01.gif" alt="" /></span>:""} </button> 
                            </div>
                        </div>
                    </form>
                </div>
                <div className="contact-item" data-aos="fade-up">
                    <img src="./images/contact.png" alt="" />
                    <div className="contactitem">
                        <div className="contactitem1">
                            <div className="c1"><IoMdContact /></div>
                            <div className="c1"><FaWhatsappSquare /></div>
                            <div className="c1">9696587251</div>
                            <div className="c1" onClick={handleNumber}><MdOutlineContentCopy className="copy" /></div>
                        </div>
                        <div className="contactitem1">
                            <div className="c1"><MdOutlineMailOutline /></div>
                            <div className="c1">guptaamarjit777@gmail.com</div>
                            <div className="c1" onClick={handleEmail}><MdOutlineContentCopy className="copy" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contact;