import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import Generate from './generate/Generate';

const Home = () => {
  return (
    <section className="home-container">
        <div className="hero-container">
            <h1>Quickly generate inspiration.</h1>
            <p>Generate melodies in keys that match your moods and emotions. Beat writer’s block when writing music regardless of your musical or technical expertise!</p>
            <motion.a
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'string', stiffness: 400, damping: 10 }}
            >
                <Link to='/generate' className='get-started-button'>Get Started</Link>
            </motion.a>
        </div>
        <Routes>
            <Route path='/generate' Component={Generate} />
        </Routes>
    </section>
  )
}

export default Home