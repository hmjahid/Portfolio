import "./Course.css";

const Course = () => {
  return (
    <div className="Course" id="Course">

        {/** <h2 className="CourseHeading">Courses</h2> */}
        
        <section className="CourseSection">
        <h2 style={{color: "lightgreen", fontSize: "32px"}}><u>Courses & Trainings</u> :</h2>
        <h3>Database Programming</h3>
        <h4> * July - December 2018 *</h4>
        <h5>Bangladesh Technical Education Board (BTEB)</h5>
        <a href="http://180.211.162.102:8444/result_arch/result.php?exam=30&year=2013&roll=558756&reg=558756&Submit=+View+Result#" target="_blank"><button>Show Credential</button></a>

        <br/>
        <br/>
        <br/>
        
        <h3>Mastercam NC Programming</h3>
        <h4> * October 2018 *</h4>
        <h5>IME CADCAM Training Centre, Penang, Malaysia</h5>
        <a href="https://drive.google.com/file/d/1Z--ybhyutQVsbHU-EMw9DxPxBL9boh2E/view" target="_blank"><button>Show Credential</button></a>
        </section>
    </div>
  );
}

export default Course;