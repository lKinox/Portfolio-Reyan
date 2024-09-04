import { useState } from 'react'
import './App.css'
import Header from './components/header/Header.jsx'
import About from './components/about-me/About.jsx'
import Resume from './components/resume/Resume.jsx'
import Experience from './components/experience/Experience.jsx'
import Work from './components/work/Work.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'
import ThemeContext from './ThemeContext.jsx'
import Cookies from 'js-cookie';

function App() {
  const initialDarkMode = Cookies.get('darkMode') === 'true';

  const [isDarkMode, setIsDarkMode] = useState(initialDarkMode);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className={isDarkMode ? 'light-mode light-back' : 'dark-mode dark-back' }>
        <div className={`header-container ${isDarkMode ? 'light-mode' : 'dark-mode' } `}>
          <Header />
        </div>
        <div className="main-container">
          <About />
          <Resume />
          <Experience />
          <Work />
          <Contact />
        </div>
        <div className={`footer-container ${isDarkMode ? 'light-mode' : 'dark-mode' } `}>
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App
