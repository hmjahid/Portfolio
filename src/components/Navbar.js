import './Navbar.css';

const Navbar = () => {
  return (
    <section className='NavigationBar'>
          <h2 style={{color: "green", margin: "0px", backgroundColor: "white", padding:"5px", fontWeight:"bold", fontSize: "24px"}}>*** Starting By The Name Of Almighty ALLAH ***</h2>

        <ul>
          <li><a href='#intro'>Home</a></li>
          <li><a href='#Projects'>Projects</a></li>
          <li><a href='#Skill'>Skills</a></li>
          <li><a href='#Experience'>Experience</a></li>
          <li><a href='#Education'>Education</a></li>
          <li><a href='#Course'>Course</a></li>
          <li><a href='#Test'>Test</a></li>
          <li><a href='#HireMe'>Hire Me</a></li>
          <li><a href='#ContactMe'>Contact Me</a></li>
        </ul>
    </section>
  )
}

export default Navbar;