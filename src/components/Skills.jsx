import "./Skills.css"
import propTypes from 'prop-types'

const Skills = (props) => {
  return (
    <div className='Skill' id="Skill">

      {/** <h2 className="SkillHeading">{props.title}</h2> */}

      <section className="SkillSection">
      <h2 style={{color: "lightblue", fontSize: "32px"}}><u>My Skills</u> :</h2>
      <>
        <li>Markup Language: HTML</li>
        <li>Style Sheet Language: CSS</li>
        <li>CSS Framework: Bootstrap</li>
        <li>Programming Languages: JavaScript</li>
        <li>Database Management Systems: MySQL</li>
        <li>Version Control Systems: Git</li>
        <li>Code Hosting Platforms: Github</li>
        <li>Containerizations: Docker, Podman</li>
        <li>Container Orchestrations: Kubernetes</li>
        <li>Virtualizations: QEMU/KVM, Vmware, VirtualBox</li>
        <li>Server Virtualizations: Proxmox</li>
        <li>Network Attached Storages: TrueNAS</li>
        <li>Cloud Platforms: Amazon Web Service (AWS)</li>
        <li>Operating Systems: Linux (Ubuntu, Fedora, Centos, RHEL), Unix (FreeBSD)</li>
        <li>Scripting Languages: Bash, Python</li>
        <li>Confoguration Management Tools: Ansible</li>
        <li>Monitoring Tools: Nagios, Prometheus, Grafana</li>
        <li>Web Servers: Apache, Nginx</li>
        <li>Project Management Tools: Trello</li>
        <li>Content Management Systems: WordPress</li>
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