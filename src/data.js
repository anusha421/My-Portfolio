import tasks from "./assets/tasks.jpeg";
import commerce from "./assets/commerce.png";
import giddygifs from "./assets/giddygifs.jpeg";
import css from "./assets/css.png"
import cpp from "./assets/cpp.png";
import django from "./assets/django.png";
import git from "./assets/git.png";
import github from "./assets/github.png";
import html from "./assets/html.png";
import js from "./assets/js.png";
import python from "./assets/python.png";
import react from "./assets/react.png";
import sql from "./assets/sql.png";

export const projects = [
  {
    title: "Tasks",
    subtitle: "Django, HTML and CSS",
    description:
      "A to-do list creator application used to keep track of upcoming tasks or reminders.",
    image: tasks,
    link: "https://reactbootcamp.com",
  },
  {
    title: "Commerce",
    subtitle: "Django, HTML and CSS",
    description:
      "An eBay-like e-commerce auction site. Created using Django.",
    image: commerce,
    link: "https://youtu.be/v0pd3395iFI?si=yuyr-7te_lao6q1S",
  },
  {
    title: "Giddy Gifs",
    subtitle: "HTML, CSS, Bootstrap and Giphy's API",
    description:
      "A responsive web application used to display trending, random and any gif you search for. Created using HTML, CSS, Bootstrap and Giphy's API.",
    image: giddygifs,
    link: "https://www.youtube.com/watch?v=uz20vBS0CDE",
  },
];

export const achievements = [
  {
    title: "CS50's Introduction to Computer Science",
    description: "A basic computer course including topics like abstraction, algorithms,data structures, encapsulation, resource management, security, software engineering, and web programming. Languages include C, Python, and SQL plus HTML, CSS, and JavaScript.",
    certificate: "https://cs50.harvard.edu/certificates/96e7327d-feb5-4be5-9a31-43e336aba980",
  },
  {
    title: "CS50's Web Programming with Python and JavaScript",
    description: "To learn about design and implementation of web apps with Python,  JavaScript, and SQL using frameworks like Django, React, and Bootstrap. Topics include database design, scalability, security, and user experience.",
    certificate: "https://cs50.harvard.edu/certificates/4dca46d5-b1f6-4950-82a4-3b0710c4470f",
  }
]


export const skills = [
  {
    name: "React",
    logo: react,
  },
  {
    name: "HTML",
    logo: html,
  },
  {
    name: "CSS",
    logo: css,
  },
  {
    name: "Python",
    logo: python,
  },
  {
    name: "C++",
    logo: cpp,
  },
  {
    name: "Django",
    logo: django,
  },
  {
    name: "JavaScript",
    logo: js,
  },
  {
    name: "SQL",
    logo: sql,
  },
  {
    name: "Git",
    logo: git,
  },
  {
    name: "GitHub",
    logo: github,
  },
];
