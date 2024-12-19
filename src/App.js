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
            <div className="close" onClick={exitMenu}>
              <div>X</div>
            </div>
            <li><a href="/App.js">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
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
              A frontend developer specializing in building website digital. Based in Bandung, Indonesia.
            </p>
          </div>
          <div className={isDarkMode ? "aboutme-dark" : "aboutme"}>
            <h1>
              About Me
            </h1>
          </div>
          <div>Pengalaman</div>
          <div>Pendidikan</div>
          <div>Keahlian</div>
        </div>
      </section>

      <footer>

      </footer>
    </div>
  );
}

export default App;
