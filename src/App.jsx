import React from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Articles from './components/Articles';
import Tools from './components/Tools';
import Updates from './components/Updates';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <Ticker />
      <Articles />
      <Tools />
      <Updates />
      <Newsletter />
      <Footer />
    </>
  );
}
