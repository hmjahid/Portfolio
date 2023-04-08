import './Hire.css';
import CV from './Md Jahid Hasan_CV.pdf';

const Hire = () => {
  return (
    <div className="Hire" id='HireMe'>
        <h2 className='HireHeading'>Hire Me</h2>
        <section className='HireSection'>
        <h2 style={{color: "white"}}><u>Want to Hire Me ?</u></h2>
        <a href="https://drive.google.com/file/d/1OP3yEHnx8o2MSePB5RKgRR-h7z-UGXGI/view?usp=share_link" target="_blank"><button>View CV</button></a> 

        <br/>
        <br/>

        <a href={CV} download><button>Download CV</button></a>
        </section>
    </div>
  )
}

export default Hire;