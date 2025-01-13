import './App.css';
import { useState } from 'react';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleClass = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  console.log("toggle active", isDarkMode)
  console.log("toggle unactive", setIsDarkMode)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const exitMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="body">
      <header className={isDarkMode ? "header-dark" : "header"}>
        <nav className={isDarkMode ? "navbar-dark" : "navbar"}>
          <div className='logle'>
            <div className="logo">Ikhsan Rifansyah</div>
            <label className="toggle-switch">
              <input type="checkbox" checked={isDarkMode} onChange={toggleClass} />
              <span className="slider"></span>
            </label>
          </div>
          <ul className={isOpen ? "nav-links open" : "nav-links"}>
            {/* <div className="close" onClick={exitMenu}>
              <div>X</div>
            </div> */}
            <li><a href="/">Home</a></li>
            <li><a href="#aboutme">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skill">Skill</a></li>
          </ul>
          <div className="burger" onClick={toggleMenu}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </header>

      <section>
        <div id='bg-portofolio' className={isDarkMode ? "bg-portofolio-dark" : "bg-portofolio"}>
          <div className={isDarkMode ? "profile-dark" : "profile"}>
            <h1>
              Ikhsan Rifansyah
            </h1>
            <h3>
              Frontend Developer.
            </h3>
            <p>
              Hi! I'm a frontend developer specializing in building website digital. Based in Bandung, Indonesia.
            </p>
          </div>
          <div id='aboutme' className={isDarkMode ? "aboutme-dark" : "aboutme"}>
            <h1>
              About Me
            </h1>
            <h4>
              Hi, I'm Ikhsan Rifansyah, a passionate Front-End Developer based in Bandung, Indonesia. I recently graduated from Vocational High School with a focus on Computer Engineering, and I’ve spent the past year honing my skills in front-end development.I enjoy building dynamic and responsive web applications. I am dedicated to creating seamless user experiences and beautiful, functional designs. I thrive in collaborative environments, always eager to take on new challenges and continue growing in the fast-paced world of web development.
            </h4>
            <h4>
              Here are some of the technologies I use:
            </h4>
            <ul>
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind</li>
            </ul>
          </div>
          <div id='experience' className={isDarkMode ? "experience-dark" : "experience"}>
            <h1>
              Experience
            </h1>
            <h3>Frontend Developer | PT Cahaya Acitya Indonesia (Codelite)</h3>
            <p><strong>January 2024 – May 2024 | Bandung, Indonesia</strong></p>
            <ul>
              <li>Developed web applications, starting from Figma/UI designs to full implementation using Nuxt.js, based on Vue.js and JavaScript.</li>
              <li>Focused on building a Content Management System (CMS) website.</li>
              <li>Gained hands-on experience with Nuxt.js, Tailwind CSS, and API integration (CRUD operations).</li>
              <li>Collaborated with a development team to meet deadlines and deliver quality products.</li>
            </ul>

            <h3>Frontend Developer | PT Neuronworks Indonesia</h3>
            <p><strong>October 2023 – December 2023 | Bandung, Indonesia</strong></p>
            <ul>
              <li>Developed web applications using Next.js, based on React.js and JavaScript, starting from the design phase to the website’s full implementation.</li>
              <li>Contributed to building a rental/booking website.</li>
              <li>Worked with Next.js and Tailwind CSS to create clean, responsive designs.</li>
              <li>Integrated APIs using the Create, Read, Update, Delete method, ensuring smooth functionality.</li>
              <li>Collaborated with team members to deliver projects on time.</li>
            </ul>
          </div>
          <div id='skill' className={isDarkMode ? "skill-dark" : "skill"}>
            <h1>
              Skill
            </h1>
            <h3>Programming Languages</h3>
            <ul>
              <li>PHP (Advanced)</li>
              <li>JavaScript (Intermediate)</li>
              <li>Java (Intermediate)</li>
            </ul>

            <h3>Frameworks</h3>
            <ul>
              <li>Nuxt.js (Advanced)</li>
              <li>Next.js (Intermediate)</li>
              <li>Laravel (Intermediate)</li>
              <li>Express (Intermediate)</li>
            </ul>

            <h3>Other Skills</h3>
            <ul>
              <li>API Integration (CRUD operations)</li>
              <li>Tailwind CSS</li>
              <li>Figma/UI Design Implementation</li>
              <li>Fluent in Bahasa Indonesia (Native), Intermediate English</li>
            </ul>
          </div>
        </div>
      </section>

      <footer>

      </footer>
    </div>
  );
}

export default App;
