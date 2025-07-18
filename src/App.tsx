import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import SplashScreen from './components/SplashScreen.tsx';
import Home from './pages/Home.tsx';
import Education from './pages/Education.tsx';
import Projects from './pages/Projects.tsx';
import Contact from './pages/Contact.tsx';
import ProjectDetail from './pages/projects/ProjectDetail.tsx';
import AnimatedBackground from './components/AnimatedBackground.tsx';

function AppContent() {
  // const { isDarkMode, toggleTheme } = useTheme();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000); // Show splash for 2 seconds
    return () => clearTimeout(timer);
  }, []);

  // Custom cursor effect
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 10px;
      height: 10px;
      background: rgba(255, 255, 255, 0.5);
      border: 2px solid #000000;
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transition: all 0.025s ease;
    `;
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX - 3}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    };
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;