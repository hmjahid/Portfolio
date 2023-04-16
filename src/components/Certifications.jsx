import "./Certifications.css";

const Certifications = () => {
  return (
    <div className="Certifications" id="Certifications">

        {/** <h2 className="CertificationsHeading">Courses</h2> */}
        
        <section className="CertificationsSection">
        <h2 style={{color: "white", fontSize: "32px"}}><u>Certifications</u> :</h2>
        <h3>Practical Git: for Absolute Beginners</h3>
        <h4> * April 2023 *</h4>
        <h5>Udemy</h5>
        <a href="https://www.udemy.com/certificate/UC-756f782d-1d2f-4fe5-ad40-db994351f9df/" target="_blank"><button>Show Credential</button></a>
        </section>
    </div>
  );
}

export default Certifications;