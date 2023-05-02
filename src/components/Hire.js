import './Hire.css';
import CV from './Md Jahid Hasan_CV.pdf';

const Hire = () => {
  return (
    <div className="Hire" id='HireMe'>

        {/** <h2 className='HireHeading'>Hire Me</h2> */}

        <section className='HireSection'>
        <h2 style={{color: "white", fontSize: "32px"}}><u>Hire Me</u> :</h2>
        <a href="https://drive.google.com/file/d/1OP3yEHnx8o2MSePB5RKgRR-h7z-UGXGI/view?usp=share_link" target="_blank"><button>VIEW RESUME</button></a> 
        <br/>
        <a href={CV} download><button>DOWNLOAD RESUME</button></a>
        <br/>
        <a href="https://www.upwork.com/freelancers/~010cdb4fba08b4f5e0" target='_blank'><button>HIRE ON UPWORK</button></a>
        <br/>
        <a href="https://www.freelancer.com/u/hmjahid" target='_blank'><button>HIRE ON FREELANCER</button></a>
        <br/>
        <a href="https://www.fiverr.com/hmjahid7432" target='_blank'><button>HIRE ON FIVERR</button></a>
        </section>
    </div>
  )
}

export default Hire;