import React from "react";
import aboutData from "../Utils/AboutData";
import "../CSS/AboutPage.css";

const About = () => {
  return (
    <section>
      <h2>About</h2>
      <div className="about_section">
        <div className="about_education_div">
          <h2>Education</h2>
          {aboutData.education.map((values, index) => (
            <ul key={index}>
              <li>
                <h3>{values.title}</h3>
                <p>{values.institution}</p>
                <p>{values.place}</p>
                <p>
                  {values.year} - <strong>{values.percentage}</strong>
                </p>
              </li>
            </ul>
          ))}
        </div>

        <div className="about_certification_div">
          <h2>Certifications</h2>
          {aboutData.certification.map((values, index) => (
            <ul key={index}>
              <li key={index}>
                <h3>{values.title}</h3>
                <p>
                  {values.site} - <strong>{values.year}</strong>
                </p>
              </li>
            </ul>
          ))}
        </div>

        <div className="about_skills_div">
          <h2>Skills</h2>
          <div className="about_section_skills">
            {aboutData.skills.map((values, index) => (
              <ul key={index}>
                <li key={index}>
                  <button className="about_section_skills_button">
                    {values}
                  </button>
                </li>
              </ul>
            ))}
          </div>

          <div className="about_concepts">
            <h2>Concepts</h2>
            <ul>
              <li>
                <strong>Low Level Design</strong>
              </li>
              <li>
                <strong>Object Oriented Programming</strong>
              </li>
              <li>
                <strong>Data Structure & Algorithm</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
