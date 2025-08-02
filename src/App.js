import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>My Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="about" className="about">
  <img src={require('./assets/profile.jpg')} alt="Profile" className="profile-img" />
  <div>
    <h2>About Me</h2>
    <p>
      Hi! I’m Shivam, a passionate frontend developer who builds responsive, clean, and modern web interfaces using HTML, CSS, JavaScript, and React.
    </p>
  </div>
</section>


        <section id="projects" className="projects">
  <h2>Projects</h2>
  <div className="project-grid">
    <div className="project-card">
      <h3>Portfolio Website</h3>
      <p>A responsive portfolio built using React and CSS.</p>
      <a href="https://yourportfolio.com" target="_blank" rel="noreferrer">View Project</a>
    </div>
    <div className="project-card">
      <h3>Todo App</h3>
      <p>A clean and simple task manager using React hooks.</p>
      <a href="https://yourtodoapp.com" target="_blank" rel="noreferrer">View Project</a>
    </div>
    <div className="project-card">
      <h3>Weather App</h3>
      <p>Real-time weather updates using OpenWeather API.</p>
      <a href="https://yourweatherapp.com" target="_blank" rel="noreferrer">View Project</a>
    </div>
  </div>
</section>


        <section id="contact" className="contact">
  <h2>Contact Me</h2>
  <form>
    <label htmlFor="name">Name</label>
    <input type="text" id="name" name="name" placeholder="Your Name" required />

    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" placeholder="Your Email" required />

    <label htmlFor="message">Message</label>
    <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>

    <button type="submit">Send Message</button>
  </form>
</section>

      </main>

      <footer>
        <p>&copy; 2025 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
