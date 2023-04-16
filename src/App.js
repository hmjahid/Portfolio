import './App.css';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Course from './components/Course';
import Language from './components/Language';
import Test from './components/Test';
import Hire from './components/Hire';
import Contact from './components/Contact';
import Projects from './components/Projects';
import About from './components/About';
import Home from './components/Home';
import Certifications from './components/Certifications';

function App() {

  return (
    <section className="App">

    <Home />

    <About />
    
    <Projects />

    <section className='SkillDiv'>
         <Skills title= "Skills"/>
    </section>
      
    <Experience 
          position1="Office Assistant Cum Computer Operator"
          position2="CNC Operator, Machinist and Programmer" 
          company="Nichima Precision Engineering Sdn. Bhd. , Penang, Malaysia"
      />

    <Education />

    <Certifications />

    <Course />

    <Language />

    <Test />

    <Contact />

    <Hire />
      
    </section>
  );
}

export default App;
