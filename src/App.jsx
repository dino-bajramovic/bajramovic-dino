/**
 * @copyright 2025 dino-bajramovic
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);


/**
 * Components
 */
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Certifications from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SEO from "./components/SEO";


const App = () => {
  useGSAP(() => {
    // Respect reduced-motion: CSS keeps .reveal-up content visible instead.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const elements = gsap.utils.toArray('.reveal-up');

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      })
    });
  });

  return (
    <ReactLenis root>
      <SEO />
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Experience />
        <Work />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  )

}


export default App;
