import './Home.css';
import Navbar from "./Navbar";
import CV from './Md Jahid Hasan_CV.pdf';
import MdJahidHasan from './MdJahidHasan.png';
import BootstrapNavbar from './BootstrapNavbar';

const Home = () => {
  return (
    <section className='Intro' id='Intro'>

      <Navbar />

      {/** 

      <BootstrapNavbar />

      <iframe className='ProfilePhoto' src="https://www.dropbox.com/home/Photos?preview=Md+Jahid+Hasan+Low.jpg" height="400" width="304" title="Md Jahid Hasan" target="_blank"></iframe>
      
      
      <img className='ProfilePhoto' src={MdJahidHasan} alt="Md Jahid Hasan" style={{height: "400px", width: "304px"}}/>

      */}

      <div className='ProfileSection'>
        <h1 id='Name'><b>Md Jahid Hasan</b></h1>
        <h2 className='Profession'>Front-End Developer</h2>
        <p className='ProfileAbout'>
          I am a qualified and professional <span style={{color: "orangered"}}><b>Front-End Web Developer</b></span> with experience in website design. Strong creative and analytical skills. I am detail oriented and a hardworker. Team player with an eye for details. I am well and love working in team environment as well as utilizing self initiative. I am a result-oriented person who loves his duties and responsibilities, highly focuses on his job, a quick learner and loves coding, designing & developing Front-End of amazing websites in Linux environment. I am excited to learn new technology.
        </p>

        <section className='TopDownload'> 
          <a href={CV} download className='DownloadResume'><button>DOWNLOAD RESUME</button></a>
          <a href="#About"><button>ABOUT ME</button></a>
        </section>
      </div>

      {/* 
      
      <br/>
      <br/>

      <section className='FollowMe'>
      <h3 className='FollowMe'><u>Follow Me</u> :</h3>
      <a href='https://www.linkedin.com/in/md-jahid-hasan-584712243/' target='_blank'><button>Linkedin</button></a>
      <a href='https://github.com/hmjahid' target='_blank'><button>Github</button></a>
      <a href='https://twitter.com/mdjahidhasan919' target='_blank'><button>Twitter</button></a>
      <a href='https://www.facebook.com/mdjahidhasan52443' target='_blank'><button>Facebook</button></a>
      <a href='https://www.instagram.com/md_jahid_hasan52443/' target='_blank'><button>Instagram</button></a>
      </section>

      */}

    </section>
  )
}

export default Home;
