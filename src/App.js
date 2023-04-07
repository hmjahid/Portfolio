import './App.css';
import Header from './Header';
import {SubHeader} from './Header';
import { Starter, Greetings, Introduction } from './components/Greetings';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Course from './components/Course';
import MdJahidHasan from './components/MdJahidHasan.jpg';
import Language from './components/Language';
import Test from './components/Test.js';
import Navbar from './components/Navbar';
import Hire from './components/Hire';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  const dateOfBirth = "1st September, 1996"

  return (
    <div className="App">
    <div className='Intro' id='Intro'>
    {/**
      <Starter/>
      <Greetings/>
      <Introduction/>
      <Header/>
      <SubHeader/>
    */}
      <Navbar />

      {/**
      <section className='NavigationSection'>
        <ul>
          <li><a href='#intro'>Home</a></li>
          <li><a href='#Skill'>Skills</a></li>
          <li><a href='#Experience'>Experience</a></li>
          <li><a href='#Education'>Education</a></li>
          <li><a href='#Course'>Course</a></li>
          <li><a href='#Test'>Test</a></li>
          <li><a href='#HireMe'>Hire Me</a></li>
          <li><a href='#ContactMe'>Contact Me</a></li>
        </ul>
      </section>
      */}
    
      <img className='ProfilePhoto' src={MdJahidHasan} alt="Md Jahid Hasan" style={{height: "400px", width: "304px"}}/>
      <h1 id='Name'>Md Jahid Hasan</h1>
      <h2 className='Profession'>Front-End Developer</h2>
      <p className='About'>
        I am a qualified and professional Front-End Web Developer with experience in website design. Strong creative and analytical skills. I am detail oriented and a hardworker. Team player with an eye for details. I am well and love working in team environment as well as utilizing self initiative. I am a detail-oriented and result-oriented who loves his duties and responsibilities, highly focuses on his job, a quick learner and loves coding, designing & developing Front-End of amazing websites in Linux environment. I am excited to learn new technology.
      </p>

      <br/>
      <br/>

      <section className='FollowMe'>
      <h3 className='FollowMe'>Follow Me :</h3>
      <a href='https://www.linkedin.com/in/md-jahid-hasan-584712243/' target='_blank'><button>Linkedin</button></a> &nbsp;&nbsp;
      <a href='https://github.com/hmjahid' target='_blank'><button>Github</button></a> &nbsp;&nbsp; 
      <a href='https://twitter.com/mdjahidhasan919' target='_blank'><button>Twitter</button></a> &nbsp;&nbsp; 
      <a href='https://www.facebook.com/mdjahidhasan52443' target='_blank'><button>Facebook</button></a> &nbsp;&nbsp; 
      <a href='https://www.instagram.com/md_jahid_hasan52443/' target='_blank'><button>Instagram</button></a> &nbsp;&nbsp; 
      </section>

    {/**
      <h3 className='dateOfBirth'>Date of Birth : {dateOfBirth}</h3>
    */}
    </div>

    <Projects />
      <div className='SkillDiv'>
         <Skills title= "Skills"/>
      </div>
      <Experience 
          position1="Office Assistant Cum Computer Operator"
          position2="CNC Operator, Machinist and Programmer" 
          company="Nichima Precision Engineering Sdn. Bhd., Penang, Malaysia"
      />
      <Education/>
      <Course/>
      <Language/>
      <Test/>
      <Hire/>
      <Contact/>
      
    </div>
  );
}

export default App;
