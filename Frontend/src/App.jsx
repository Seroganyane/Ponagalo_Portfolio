import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import profileImage from './img/img2.jpg';
import homeImage from './img/img1.jpg';

import "./App.css";
export default function App() {
  return (
    <Router>
<div className="app-container">
<aside className="sidebar">
<img src={profileImage} className="rounded-circle" alt="Profile" />
<h2 className="brand">Ponagalo Seroganyane Mathaba</h2>
<nav>
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/projects">Projects</Link>
<Link to="/contact">Contact</Link>
<Link to="/certificates">Certificates</Link>
<Link to="/education">Education</Link>
</nav>
<div className="socials">
<a href="https://www.github.com/Seroganyane">GitHub</a>
<a href="https://www.linkedin.com/in/seroganyane-ponagalo-mathaba-">LinkedIn</a>
</div>
</aside>


<main className="main">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/projects" element={<Projects />} />
<Route path="/contact" element={<Contact />} />
<Route path="/certificates" element={<Certificates />} />
<Route path="/education" element={<Education />} />
</Routes>
</main>
</div>
</Router>
);
}
function Home() {
  return (
    <section className="card">
      <div className="content">
        <h1>Hi — I'm Ponagalo Seroganyane</h1>
        <p>
          Final-year Diploma in ICT student & developer. I build web and mobile
          apps that solve real problems.
        </p>
        <div className="cta">
          <Link to="/projects" className="btn">See projects</Link>
          <Link to="/contact" className="btn primary">Contact me</Link>
        </div>
      </div>
      <div className="image-container">
        <img src={homeImage} alt="Profile" />
      </div>
    </section>
  );
}
function About() {
  return (
    <section className="card about">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          I’m passionate about technology and innovation because I enjoy solving
          real-life problems and making people’s lives easier through software.
          Since high school, I’ve been fascinated by programming, and during my
          studies, I focused heavily on backend development. I enjoy working with
          languages like Python, Node.js, and SQL, and I love how backend feels
          like connecting pieces of a puzzle — designing databases, building
          APIs, and making systems reliable. I believe my strength is being
          observant and detail-oriented, which helps me spot problems and create
          efficient solutions.
        </p>
        <div className="skills-section">
          <h3>Soft Skills</h3>
          <ul className="skills">
            <li>Communication Skills</li>
            <li>Teamwork</li>
            <li>Problem Solving</li>
            <li>Adaptability</li>
            <li>Time Management</li>
            <li>Critical Thinking</li>
            <li>Interpersonal Skills</li>
            <li>Computer Literacy</li>
          </ul>
        </div>
        <div className="skills-section">
          <h3>Technical Skills</h3>
          <ul className="skills">
            <li>Frontend Development</li>
            <li>Backend Development</li>
            <li>Electrical Engineering</li>
            <li>Farming</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
function Education() {
const education = [
{ id: 1, title: "Diploma in ICT", desc: "University of Mpumalanga" },
{ id: 2, title: "National Senior Certificate", desc: "Northern Academy Secondary School" },
];
return (
<section className="card">
<h2>Education</h2>
<ul className="education-list">
{education.map(e => (
<li key={e.id}>
<h4>{e.title}</h4>
<p>{e.desc}</p>
</li>
))}
</ul>
</section>
);
}
function Projects() {
const projects = [
{ id: 1, title: "Task Management App", desc: "Node/Express/Mongo app for managing tasks." },
{ id: 2, title: "Event Manager — Java EE", desc: "Event registration, ticketing and payments." },
];


return (
<section className="card">
<h2>Projects</h2>
<div className="project-grid">
{projects.map(p => (
<article key={p.id} className="project">
<div className="project-image" />
<h4>{p.title}</h4>
<p>{p.desc}</p>
<div className="tags">
<span>Example</span>
</div>
</article>
))}
</div>
</section>
);
}
function Contact() {
const [status, setStatus] = React.useState(null);


async function handleSubmit(e) {
e.preventDefault();
setStatus('sending');


const data = new FormData(e.target);
const payload = {
name: data.get('name'),
email: data.get('email'),
message: data.get('message')
};


try {
const res = await fetch('/api/contact', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(payload)
});


if (res.ok) {
setStatus('sent');
e.target.reset();
} else {
const err = await res.text();
setStatus('error: ' + err);
}
} catch (err) {
setStatus('error: ' + err.message);
}
}
return (
<section className="card">
<h2>Contact me</h2>
<form onSubmit={handleSubmit} className="contact-form">
<input name="name" placeholder="Your name" required />
<input name="email" placeholder="Your email" type="email" required />
<textarea name="message" placeholder="Message" rows={6} required />
<button className="btn primary" type="submit">Send message</button>
</form>
{status && <p className="status">{status}</p>}
</section>
);
}
function Certificates() {
const certificates = [
{ id: 1, title: "Amazon Web Services", desc: "AWS Cloud Practitioner" },
{ id: 2, title: "FNB App Academy", desc: "Full Stack Development" },
{ id: 3, title: "Alx Africa", desc: "Professional Foundations" },
{ id: 3, title: "Alx Africa", desc: "Professional Foundations" },
];
return (
<section className="card">
<h2>Certificates</h2>
<ul className="cert-list">
{certificates.map(c => (
<li key={c.id}>
<h4>{c.title}</h4>
<p>{c.desc}</p>
</li>
))}
</ul>
</section>
);
} 