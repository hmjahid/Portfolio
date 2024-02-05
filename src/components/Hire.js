import './Hire.css';
import CV from './Md Jahid Hasan CV WordPress Developer.pdf';

const Hire = () => {
  return (
    <div className="Hire" id='HireMe'>

        {/** <h2 className='HireHeading'>Hire Me</h2> */}

        <section className='HireSection'>
        <h2 style={{color: "white", fontSize: "32px"}}><u>Hire Me</u> :</h2>
        <a href="https://drive.google.com/file/d/1lMN-lXWiT8PGN7tRQCmCvemcp_1kP_eJ/view" target="_blank"><button>VIEW RESUME</button></a> 
        <br/>
        <a href={CV} download><button>DOWNLOAD RESUME</button></a>
        <br/>
        <a href="https://www.upwork.com/freelancers/~010cdb4fba08b4f5e0" target='_blank'><button>HIRE ON UPWORK</button></a>
        <br/>
        <a href="https://www.freelancer.com/u/hmjahid" target='_blank'><button>HIRE ON FREELANCER</button></a>
        <br/>
        <a href="https://kwork.com/user/hmjahid" target='_blank'><button>HIRE ON KWORK</button></a>
        <br/>
        <a href="https://www.guru.com/freelancers/hmjahid" target='_blank'><button>HIRE ON GURU</button></a>
        </section>
    </div>
  )
}

export default Hire;