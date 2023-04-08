import './Navbar.css';

const Navbar = () => {
  return (
    <section className='NavigationBar'>
          <h2 style={{color: "green", margin: "0px", backgroundColor: "white", padding:"5px", fontWeight:"bold", fontSize: "24px"}}>*** Starting By The Name Of Almighty ALLAH ***</h2>

        <ul>
          <li onClick={() => window.location.reload('#Intro')}><a href=''>Home</a></li>
          <li onClick={() => window.location.replace("#Skill")}><a href='#Skill'>Skills</a></li>
          <li><a href='#Projects'>Projects</a></li>
          <li><a href='#Experience'>Experiences</a></li>
          <li><a href='#Education'>Education</a></li>
          <li><a href='#Course'>Courses</a></li>
          <li><a href='#Language'>Languages</a></li>
          <li><a href='#Test'>Tests</a></li>
          <li><a href='#HireMe'>Hire Me</a></li>
          <li><a href='#ContactMe'>Contact Me</a></li>
        </ul>
    </section>
  )
}

export default Navbar;