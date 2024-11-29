import React, { useState } from "react";
import images from "../Utils/Index";
import "../CSS/FooterPage.css";

const Footer = () => {
  let [formData, setFormData] = useState({ name: "", email: "", message: "" });
  let [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  /// when comes complex application you should consider call back function inside of the setFormData() function that would more sense and tha will help us manage our latest data we can easily update our new values buddy

  //// like setFormData((prev) => ({...prev, [name]:value}))..... like that buddy

  const submitionHandle = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setSubmitted(false);
  };

  return (
    <section className="footer">
      <div className="footer_div">
        <h2
          style={{ textAlign: "center", marginBottom: "20px", color: "blue" }}
        >
          Take A Coffee & Chat With Me
        </h2>
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
        {submitted ? (
          <div className="thanks_div">
            <h1>Thanks For Your Valuable Time 💗</h1>

            <button onClick={handleReset}>
              <a href="#submitbtn">
                Smash The Button If You've Entered Wrong Data
              </a>
            </button>
          </div>
        ) : (
          <div className="footer_input">
            <form onSubmit={submitionHandle}>
              <label htmlFor="name">YourName:</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                required
              />
              <br />
              <label htmlFor="email">Your Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                onChange={handleChange}
              />
              <br />
              <label htmlFor="thoughts">Your Thoughts</label>
              <textarea
                name="message"
                id="thoughts"
                onChange={handleChange}
                required
              />
              <br />
              <button className="buttons" type="submit" id="submitbtn">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
      <p>@All Rights Reserved Marudhupandiyan</p>
    </section>
  );
};

export default Footer;
