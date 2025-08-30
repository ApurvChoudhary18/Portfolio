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
import PageTransition from './components/PageTransition';
import ScrollTop from './components/ScrollTop'; // 👈 import

function App() {
  const [greetingSplash, setGreetingSplash] = useState(true);
  const location = useLocation();
  const [transitionPage, setTransitionPage] = useState(null);

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
      {/* Page Transition Overlay */}
      <PageTransition 
        pageName={transitionPage} 
        onFinish={() => setTransitionPage(null)} 
      />

      {greetingSplash ? (
        <Greeting onFinish={() => setGreetingSplash(false)} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <SmoothScroll />
          <div className='App'>
            {/* Navbar */}
            <Navbar restartGreeting={restartGreeting} setTransitionPage={setTransitionPage} />

            {/* 👇 ScrollToTop here */}
            <ScrollTop />

            {/* Routes with animations */}
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path='/' element={<PageWrapper><Home setTransitionPage={setTransitionPage}/></PageWrapper>} />
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
