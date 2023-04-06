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
      <p style={{color: "red", margin: "0px 28px 0px 28px", backgroundColor: "white", padding:"5px", fontWeight:"bold", borderRadius: "8px", fontSize: "24px", boxShadow: "5px 5px 5px 5px black"}}>*** Starting By The Name Of Almighty ALLAH ***</p>

      <marquee behavior="" direction="">***Development Of This Site On Going***</marquee>
      
      <section className='NavigationSection'>
      <a href='#intro'><button>Home</button></a> &nbsp;&nbsp;
      <a href='#Skill'><button>Skills</button></a> &nbsp;&nbsp; 
      <a href='#Experience'><button>Experience</button></a> &nbsp;&nbsp; 
      <a href='#Education'><button>Education</button></a> &nbsp;&nbsp; 
      <a href='#Course'><button>Course</button></a> &nbsp;&nbsp; 
      <a href='#Test'><button>Test</button></a> &nbsp;&nbsp; 
      <a href='#QuickLinks'><button>Quick Links</button></a> &nbsp;&nbsp; 
      <a href='#HireMe'><button>Hire Me</button></a>
      </section>

      <img className='ProfilePhoto' src={MdJahidHasan} alt="Md Jahid Hasan" style={{height: "500px", width: "380px"}}/>
      <h1 id='Name'>Md Jahid Hasan</h1>
      <h2 className='Profession'>Front-End Developer</h2>
      <p className='About'>
        I am a qualified and professional front-end web developer with experience in website design. Strong creative and analytical skills. I am detail oriented and a hardworker. Team player with an eye for details. I am well and love working in team environment as well as utilizing self initiative.
      </p>

      <br/>
      <br/>

      <section className='FollowMe'>
      <h3 className='FollowMe'>Follow Me :</h3>
      <a href='https://www.linkedin.com/in/md-jahid-hasan-584712243/' target='_blank'><button>Linkedin</button></a> &nbsp;&nbsp;
      <a href='https://github.com/hmjahid' target='_blank'><button>Github</button></a> &nbsp;&nbsp; 
      <a href='https://twitter.com/mdjahidhasan919' target='_blank'><button>Twitter</button></a> &nbsp;&nbsp; 
      <a href='https://www.facebook.com/mdjahidhasan52443' target='_blank'><button>Facebookn</button></a> &nbsp;&nbsp; 
      <a href='https://www.instagram.com/md_jahid_hasan52443/' target='_blank'><button>Instagram</button></a> &nbsp;&nbsp; 
      </section>

    {/**
      <h3 className='dateOfBirth'>Date of Birth : {dateOfBirth}</h3>
    */}
    </div>

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
      
    </div>
  );
}

export default App;
