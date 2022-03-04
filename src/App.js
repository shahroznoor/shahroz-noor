import React, { useEffect } from 'react'
import Card from './components/card'
import About from './components/about';
import Footer from './components/footer';
import Skill from './components/skill';
import Contact from './components/contact';
import Aos from 'aos';
import 'aos/dist/aos.css'
function App() {
  useEffect(()=>{
    Aos.init({
      once:true
    })
  })
  return (
    <div className=" py-10 px-3 w-full overflow-hidden bg-gray-100 dark:bg-slate-900">
      <div data-aos='fade-down' data-aos-duration='800'> <Card/></div>
      <div data-aos='fade-up' data-aos-duration='800' data-aos-delay='400'> <About/></div>
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
