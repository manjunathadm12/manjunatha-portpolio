import { useState } from 'react'
import profilePhoto from '@/imports/WhatsApp_Image_2026-08-04_at_11.25.57_AM.jpeg'

const PROJECTS = [
  {
    id: 1,
    title: 'Personal Portfolio',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    description: 'A responsive portfolio website built using HTML, CSS, JavaScript, and React. It showcases my skills, projects, and contact information.',
    tech: ['HTML', 'CSS', 'React'],
    link: '#',
  },
  {
    id: 2,
    title: 'Weather App',
    image: 'https://images.unsplash.com/photo-1504608524841-42584120d328?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    description: 'A weather application that fetches live weather data using an API. Users can search for any city to view weather details.',
    tech: ['React', 'API', 'CSS'],
    link: '#',
  },
  {
    id: 3,
    title: 'AI Image Gallery',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    description: 'A modern image gallery built with React that displays AI-generated images with a responsive layout.',
    tech: ['React', 'JavaScript'],
    link: '#',
  },
]

const SKILLS = [
  { name: 'HTML', level: '90%' },
  { name: 'CSS', level: '85%' },
  { name: 'JavaScript', level: '80%' },
  { name: 'React', level: '75%' },
  { name: 'Git & GitHub', level: '70%' },
  { name: 'Responsive Design', level: '85%' },
]

function Navbar({ dark, setDark }: { dark: boolean; setDark: (v: boolean) => void }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.body.setAttribute('data-theme', next ? 'dark' : 'light')
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <header className="site-header">
      <nav className="navbar">
        <span className="logo">MDM</span>
        <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(item => (
            <li key={item}>
              <a
                href={item === 'Home' ? '#hero' : `#${item === 'About' ? 'about' : item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button className="theme-btn" onClick={toggle}>{dark ? '☀️' : '🌙'}</button>
        <button className="menu-btn" onClick={() => setMenuOpen(o => !o)}>☰</button>
      </nav>
    </header>
  )
}

function Hero() {
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good Morning' : hour < 17 ? 'Good Afternoon' : 'Good Evening'

  return (
    <section className="Hero-section" id="hero">
      <div className="Hero-content">
        <h1>
          {greeting}, I'm <span className="highlight">Manjunatha D M 👋</span>
        </h1>
        <p>
          I am a passionate Frontend Web Developer who builds responsive, modern, and user-friendly
          websites. I enjoy creating beautiful and engaging user experiences using HTML, CSS,
          JavaScript, and React.
        </p>
        <div className="Hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2>About Me</h2>
        <img
          src={profilePhoto}
          alt="Manjunatha D M"
          className="about-profile"
        />
        <p className="about-text">
          Hi, I'm <span className="highlight">Manjunatha D M</span>, a passionate Frontend Web
          Developer and B.Tech Computer Science student. I enjoy building responsive, modern, and
          user-friendly websites using HTML, CSS, JavaScript, and React.
        </p>
        <p className="about-text">
          I love turning creative ideas into real web applications with clean code and attractive
          designs. My goal is to continuously improve my development skills and become a Full Stack
          Web Developer.
        </p>
        <div className="about-cards">
          <div className="card">
            <h3>🎓 Education</h3>
            <p>B.Tech in Computer Science Engineering</p>
          </div>
          <div className="card">
            <h3>💻 Skills</h3>
            <p>HTML, CSS, JavaScript, React</p>
          </div>
          <div className="card">
            <h3>🚀 Goal</h3>
            <p>Become a Full Stack Web Developer</p>
          </div>
        </div>
        <a href="#contact" className="about-btn">Contact Me</a>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2>My Skills</h2>
        <p className="skills-description">
          Here are some of the technologies and tools I use to build modern, responsive, and
          user-friendly websites.
        </p>
        <div className="skills-grid">
          {SKILLS.map((skill, i) => (
            <div className="skill-card" key={i}>
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.level}</span>
              </div>
              <div className="progress-bar">
                <div className="progress" style={{ width: skill.level }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2>My Projects</h2>
        <p className="projects-description">
          Here are some of the projects I have built while learning web development and React.
        </p>
        <div className="projects-grid">
          {PROJECTS.map(p => (
            <div className="project-card" key={p.id}>
              <img src={p.image} alt={p.title} />
              <div className="project-content">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="project-tags">
                  {p.tech.map(t => <span key={t}>{t}</span>)}
                </div>
                <a href={p.link} className="project-btn" target="_blank" rel="noreferrer">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Message sent! Thank you for reaching out.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p className="contact-text">
          Have a project in mind or want to connect? Feel free to send me a message.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Message</label>
            <textarea
              rows={6}
              name="message"
              placeholder="Write your message..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button className="contact-btn" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">Frontend Web Developer</div>
        <p className="footer-text">Building responsive and modern web experiences.</p>
        <div className="footer-links">
          <a href="https://github.com/manjunathadm12" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:dmmanju32@gmail.com">Gmail</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <hr />
        <p className="copyright">© {year} Manjunatha D M. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved) {
        document.body.setAttribute('data-theme', saved)
        return saved === 'dark'
      }
    }
    return false
  })

  return (
    <>
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
