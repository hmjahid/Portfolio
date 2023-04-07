import "./Skills.css"
import propTypes from 'prop-types'

const Skills = (props) => {
  return (
    <div className='Skill' id="Skill">
      <h2 className="SkillHeading">{props.title}</h2>
      <section className="SkillSection">
      <h2 style={{color: "midnightblue"}}><u>My Tech Skills :</u></h2>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Bootstrap4</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Linux</li>
        <li>FreeBSD</li>
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