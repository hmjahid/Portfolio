import './Navbar.css';

const Navbar = () => {
  return (
    <section className='NavigationBar'>
        {/** 
        <h2 style={{color: "green", margin: "0px", backgroundColor: "white", padding:"5px", fontWeight:"bold", fontSize: "24px"}}>*** Starting By The Name Of Almighty ALLAH ***</h2>
        */}
        <ul>
          <li onClick={() => window.location.reload('#Intro')}><a href=''>HOME</a></li>
          <li><a href='#About'>ABOUT</a></li>
          <li><a href='#Projects'>WORKS</a></li>
          <li onClick={() => window.location.replace("#Skill")}><a href='#Skill'>SKILLS</a></li>
          <li><a href='#Experience'>EXPERIENCES</a></li>
          <li><a href='#Education'>EDUCATION</a></li>
          <li><a href='#Course'>COURSES</a></li>
          <li><a href='#Language'>LANGUAGES</a></li>
          <li><a href='#Test'>TESTS</a></li>
          <li><a href='#ContactMe'>CONTACT</a></li>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <li><a href='#HireMe' className='Active'>HIRE ME</a></li>
        </ul>
    </section>
  )
}

export default Navbar;