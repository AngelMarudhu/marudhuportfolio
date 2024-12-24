import React, { useState } from "react";
import images from "../Utils/Index";
import "../CSS/FooterPage.css";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [formData, setFormData] = useState({
    to_name: "",
    from_name: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const submitionHandle = (e) => {
    e.preventDefault();
    setStatus("sending...");

    // Sending form data to EmailJS using form reference
    emailjs
      .sendForm(
        "service_fh1brjm", // Your service ID
        "template_bv4vbvg", // Your template ID
        e.target, // Use the form directly from the event
        "9Gkyp4yme7SisKHCl" // Your public key (user ID)
      )
      .then((result) => {
        setStatus("Message sent successfully!");
        setFormData({ to_name: "", from_name: "", message: "" }); // Clear form after submission
      })
      .catch((error) => {
        console.error(error.text); // Log any errors
        setStatus("Please try again.");
      });
  };

  return (
    <section className="footer">
      <div className="footer_div">
        <h2 className="tea-break">Take A Coffee & Chat With Me</h2>
        {images.social.map((images, index) => (
          <div key={index} className="footer_social">
            <button>
              <a
                href="https://www.linkedin.com/in/marudhupandiyanshanmugavel/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="social" src={images.linkedin} alt="social" />
              </a>
            </button>
            <button>
              <a
                href="https://github.com/AngelMarudhu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="social" src={images.git} alt="social" />
              </a>
            </button>
            <button>
              <a
                href="https://x.com/MarudhuAngel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="social" src={images.x} alt="social" />
              </a>
            </button>
            <button>
              <a
                href="https://medium.com/@marudhupandi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="social" src={images.medium} alt="social" />
              </a>
            </button>
            <button>
              <a
                href="https://leetcode.com/u/Marudhupandiyan09/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="social" src={images.discord} alt="social" />
              </a>
            </button>
          </div>
        ))}

        <div className="footer_input">
          <form onSubmit={submitionHandle}>
            <input
              type="text"
              id="to_name"
              name="to_name" // Change the name to "to_name"
              value={formData.to_name} // Bind the value to formData
              onChange={handleChange}
              required
              placeholder="Your Good Name"
            />
            <br />
            <input
              type="text"
              id="from_name"
              name="from_name" // Change the name to "from_name"
              value={formData.from_name} // Bind the value to formData
              onChange={handleChange}
              required
              placeholder="Your Gentle Gmail"
            />
            <br />
            <textarea
              name="message"
              id="thoughts"
              value={formData.message} // Bind the value to formData
              onChange={handleChange}
              required
              placeholder="Your Awesome Thoughts"
            />
            <br />
            <button className="buttons" type="submit" id="submitbtn">
              Submit
            </button>
          </form>
        </div>
        <p>{status}</p>
      </div>
      <p>Ideas Come From Curiosity! Stay Curious!</p>
    </section>
  );
};

export default Footer;
