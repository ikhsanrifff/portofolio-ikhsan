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
            <li><a href="/App.js">Home</a></li>
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
        <div id='me' className='me'>
          <div className="profile">
            <h4>
              Profil
            </h4>
            <p>
              Perkenalkan nama saya Ikhsan Rifansyah, lulusan SMK Negeri 4 Bandung dari jurusan Rekayasa Perangkat Lunak.
              Memiliki Keahlian di bidang komputer selama masa sekolah dan berdasarkan pengalaman magang sebagai Frontend Web Developer.
            </p>
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
