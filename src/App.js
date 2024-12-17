import './App.css';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const exitMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <header>
      <nav className="navbar">
        <div className="logo">Ikhsan Rifansyah</div>
        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <div className="close" onClick={exitMenu}>
          <div>X</div>
          </div>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
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
        <div id='profile' className='profile'>
          <div>Profil</div>
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
