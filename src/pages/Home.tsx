import {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <section id="accueil">
        <Hero />
      </section>
            <section id="about">
        <About />
      </section>

      {/* <section id="services">
        <Services />
      </section>
      <section id="contact">
        <Contact />
      </section> */}
    </>
  );
};

export default Home;


