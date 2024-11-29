import one from "../Source/tech/pic1.jpg";
import two from "../Source/tech/pic2.jpg";
import three from "../Source/tech/pic3.jpg";
// import four from "../Source/tech/pic4.jpg";
// import five from "../Source/tech/pic5.jpg";
// import six from "../Source/tech/pic6.jpg";
// import seven from "../Source/tech/pic7.jpg";
// import eight from "../Source/tech/pic8.jpg";
// import nine from "../Source/tech/pic9.jpg";

const projectData = [
  {
    id: 1,
    title: "Login JWT Authentication",
    description: `Developed and implemented a user authentication system following the MVC pattern, leveraging React Js for the frontend and Node Js for the backend with good login efficiency
    Nodemailer to seamlessly send dynamic OTP to user for enchanced authentication 
    Implemented a secure and efficient user authentication system utlizing industry best practice and encryption algorithms to ensure seamless login functionality and protect user data in the projects`,
    techStack: "MERN",
    image: one,
    gitLink: "https://github.com/AngelMarudhu/login_jwt.git",
  },
  {
    id: 2,
    title: "Social Media Application",
    description: `Developed and exposed RESTful APIs to facilitate seamless communication between the frontend and backend components of the social media application Leveraged Express.js is the backend framework to handle API routing, request handling, and middleware integration and request processing efficiency Utilized MongoDB and Mongoose for data storage, retrieval, and manipulation`,
    techStack: "MERN",
    image: two,
    gitLink: ": https://github.com/AngelMarudhu/MemoriesFS.git",
  },
  {
    id: 3,
    title: "Linkedin & Airbnb",
    description: `Mastered client-side development with React, utilising libraries like React Router, Redux, and styled components, and Impressive user interface responsiveness.Handled HTTP requests and responses efficiently, good reduction in data response time. Leveraged MongoDB and Mongoose for efficient data storage and retrieval, reducing database access time and manipulation.`,
    techStack: "MERN",
    image: three,
    gitLink: " https://github.com/AngelMarudhu/Linkedin-Clones.git",
  },

  // {
  //   id: 4,
  //   title: "Login JWT Authentication",
  //   description: "blah blah blah",
  //   techStack: "MERN",
  //   image: three,
  //   gitLink: "456",
  // },

  // {
  //   id: 5,
  //   title: "Login JWT Authentication",
  //   description: "blah blah blah",
  //   techStack: "MERN",
  //   image: three,
  //   gitLink: "456",
  // },
];

export default projectData;
