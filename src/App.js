import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from "react-router-dom";
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import { useState } from 'react';
import Greeting from './components/Greeting';
import SmoothScroll from './components/SmoothScroll';
import { AnimatePresence, motion } from 'framer-motion';

function App() {

  const [greetingSplash, setGreetingSplash] = useState(true);
  const location = useLocation();

  const restartGreeting = () => {
    setGreetingSplash(true);
  }

  const PageWrapper = ({ children }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );

  return (
    <>
      {greetingSplash ? (
        <Greeting onFinish={() => setGreetingSplash(false)} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }} // Adjust duration and delay as needed
        >
          <SmoothScroll />
          <div className='App'>
            <Navbar restartGreeting={restartGreeting} />
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path='/' element={<PageWrapper><Home /></PageWrapper>} />
                <Route path='/work' element={<PageWrapper><Work /></PageWrapper>} />
                <Route path='/about' element={<PageWrapper><About /></PageWrapper>} />
                <Route path='/contact' element={<PageWrapper><Contact /></PageWrapper>} />
              </Routes>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </>
  )
}

export default App;