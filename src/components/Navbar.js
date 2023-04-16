import './Navbar.css';
import Icons from './Icons.js';
import Logo from './logo_image.jpg';
import LogoTransparent from './logo_image_transparent.jpg';


const Navbar = () => {
  return (
    <section className='NavigationBar'>
        {/** 
        <h2 style={{color: "green", margin: "0px", backgroundColor: "white", padding:"5px", fontWeight:"bold", fontSize: "24px"}}>*** Starting By The Name Of Almighty ALLAH ***</h2>
        */}

        <a href='' onClick={() => window.location.reload('#Intro')}>
          <img src={LogoTransparent} alt='Logo' style={{height: '50px', width: '50px'}} className='LogoImage'/>
        </a>

        <ul>
          <li><a href='#Intro'>Home</a></li>
          <li><a href='#About'>About</a></li>
          <li><a href='#Skill'>Skills</a></li>
          <li><a href='#Projects'>Works</a></li>
          <li><a href='#Experience'>Experiences</a></li>
          <li><a href='#Education'>Educations</a></li>
          <li><a href='#Certifications'>Certifications</a></li>
          <li><a href='#Course'>Courses</a></li>
          <li><a href='#Language'>Languages</a></li>
          <li><a href='#Test'>Tests</a></li>
          <li><a href='#ContactMe'>Contact</a></li>
          
          <li><a href='#HireMe' className='Active'>Hire Me</a></li>
        </ul>

        <Icons />
    </section>
  )
}

export default Navbar;