import './Home.css';
import Navbar from "./Navbar";
import CV from './Md Jahid Hasan_CV.pdf';
import MdJahidHasan from './MdJahidHasan.jpg';

const Home = () => {
  return (
    <section className='Intro' id='Intro'>

      <Navbar />

      <img className='ProfilePhoto' src={MdJahidHasan} alt="Md Jahid Hasan" style={{height: "400px", width: "304px"}}/>

      <h1 id='Name'>Md Jahid Hasan</h1>
      <h2 className='Profession'>Front-End Developer</h2>
      <p className='ProfileAbout'>
        I am a qualified and professional Front-End Web Developer with experience in website design. Strong creative and analytical skills. I am detail oriented and a hardworker. Team player with an eye for details. I am well and love working in team environment as well as utilizing self initiative. I am a result-oriented person who loves his duties and responsibilities, highly focuses on his job, a quick learner and loves coding, designing & developing Front-End of amazing websites in Linux environment. I am excited to learn new technology.
      </p>

      <section className='TopDownload'> 
        <a href={CV} download><button>DOWNLOAD RESUME</button></a>
        &nbsp; &nbsp;
        <a href="#About"><button>ABOUT ME</button></a>
      </section>

      <br/>
      <br/>

      <section className='FollowMe'>
      <h3 className='FollowMe'><u>Follow Me</u> :</h3>
      <a href='https://www.linkedin.com/in/md-jahid-hasan-584712243/' target='_blank'><button>Linkedin</button></a> &nbsp;&nbsp;
      <a href='https://github.com/hmjahid' target='_blank'><button>Github</button></a> &nbsp;&nbsp; 
      <a href='https://twitter.com/mdjahidhasan919' target='_blank'><button>Twitter</button></a> &nbsp;&nbsp; 
      <a href='https://www.facebook.com/mdjahidhasan52443' target='_blank'><button>Facebook</button></a> &nbsp;&nbsp; 
      <a href='https://www.instagram.com/md_jahid_hasan52443/' target='_blank'><button>Instagram</button></a> &nbsp;&nbsp; 
      </section>

    </section>
  )
}

export default Home;