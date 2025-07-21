
import React, { useState, useEffect } from 'react';
import AboutWindow from './components/AboutWindow';
import SkillsWindow from './components/SkillsWindow';
import ContactWindow from './components/ContactWindow';

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(onFinish, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="flex items-center justify-center h-full bg-black text-green-400 text-xl font-mono animate-pulse">
      <p>Booting ParthOS... Initializing Cloud Admin Protocol...</p>
    </div>
  );
};

const App = () => {
  const [bootDone, setBootDone] = useState(false);

  if (!bootDone) return <SplashScreen onFinish={() => setBootDone(true)} />;

  return (
    <div className="relative w-full h-screen bg-blue-100 dark:bg-slate-900 text-black dark:text-white font-sans">
      <div className="absolute top-5 left-5">
        <AboutWindow />
      </div>
      <div className="absolute top-5 right-5">
        <SkillsWindow />
      </div>
      <div className="absolute bottom-5 left-5">
        <ContactWindow />
      </div>

      <footer className="absolute bottom-0 w-full bg-gray-800 text-white text-center p-2 text-sm">
        ⏣ ParthOS - Cloud System Admin Edition
      </footer>
    </div>
  );
};

export default App;
