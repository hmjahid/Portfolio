import "./Skills.css"
import propTypes from 'prop-types'

const Skills = (props) => {
  return (
    <div className='Skill' id="Skill">

      {/** <h2 className="SkillHeading">{props.title}</h2> */}

      <section className="SkillSection">
      <h2 style={{color: "lightblue", fontSize: "32px"}}><u>My Skills</u> :</h2>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Bootstrap4</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>MySQL</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Docker</li>
        <li>Podman</li>
        <li>Virtualization (QEMU/KVM, VirtualBox)</li>
        <li>Linux</li>
        <li>FreeBSD</li>
        <li>Trello</li>
        <li>PSD/Figma to HTML</li>
        <li>PSD/Figma to WordPress</li>
        <li>WordPress Website Development</li>
        <li>WordPress Theme Customization</li>
        <li>WooCommerce Website Development</li>
      </ul>
      </section>
    </div>
  );
}

Skills.propTypes = {
  title: propTypes.string
}

Skills.defaultProps = {
  title: "Title"
}

export default Skills;