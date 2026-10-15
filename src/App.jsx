import { useState, useEffect  } from 'react';
import profile from './data/profile.js';
import Navbar from './component/Navbar.jsx';
import Hero from './component/Hero.jsx';
import About from './component/About.jsx';
import Skills from './component/Skills.jsx';
import Projects from './component/Projects.jsx';
import Contact from './component/Contact.jsx';
import Footer from './component/Footer.jsx';


function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }


  return (
    <>
      <Navbar name={profile.name} theme={theme} onToggleTheme={toggleTheme}/>
      <main>
        <Hero profile={profile} />
        <About profile={profile} />
        <Skills skills={profile.skills} />
        <Projects projects={profile.projects} />
        <Contact email={profile.email} />
      </main>
      <Footer name={profile.name} socials={profile.socials} />
      {/*...main and Footer stay the same */}
      </>
  );
}

export default App;