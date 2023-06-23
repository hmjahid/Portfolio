import './About.css';
import CV from './Md Jahid Hasan_CV.pdf';

const About = () => {
  return (
    <div className="About" id='About'>

    {/** <h2 className='AboutHeading'>About Me</h2> */}

     <section className='AboutSection'>
     <h2 style={{color : "White", fontSize: "32px"}}><u>About Me</u> :</h2>
     <h3>Hi, I am <b style={{color : "lightgreen"}}>Md Jahid Hasan</b></h3>
     <div className='AboutDetails'>
        <ul>
            <li>First Name &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;: Md Jahid</li>
            <li>Last Name &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;: Hasan</li>
            <li>D.O.B &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;: 1st September, 1996</li>
            <li>Age &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;: 27 Years</li>
            <li>Blood Group &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: O (+ve)</li>
            <li>Nationality &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Bangladeshi</li>
            <li>Language &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Bengali (Native) , English , Hindi , Bahasa Melayu</li>
            <li>Address &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Satai, Boshotpur, Sharsha, Jashore, Bangladesh - 7432</li>
            <li>Freelance &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;: Available</li>
            <li>Full Time Employment &nbsp;&nbsp;: Available</li>
          </ul>
      </div>
      <a href={CV} download><button>DOWNLOAD RESUME</button></a>
      <a href="#ContactMe"><button className='UniqueButton'>CONTACT ME</button></a>
      { /** 
      &nbsp; &nbsp;
      <a href="#HireMe"><button>HIRE ME</button></a>
      */}
     </section>
    </div>
  )
}

export default About;