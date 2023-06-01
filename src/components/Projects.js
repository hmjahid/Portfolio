import './Projects.css';

const Projects = () => {
  return (
    <div className="Projects" id='Projects'>

        {/** <h2 className='ProjectsHeading'>Projects</h2> */}

        <section className='ProjectsSection'>
          <h2 style={{color: "white", fontSize: "32px"}}><u>My Works</u> :</h2>

            <div className='ProjectDetils'>
              <div className='Project'>
              <h3>Project Name : My First React App</h3>
                <iframe className='ProjectIframe' src="https://hmjahid-my-first-react-app.netlify.app/" height="320" width="320" title="My First React App" loading='lazy'></iframe> 
                <h4>Used Technology : HTML , CSS , JavaScript , React.js</h4>
                <a href='https://github.com/hmjahid/My-First-React-App' target='_blank'><button>Source Code</button></a>
                <a href='https://hmjahid-my-first-react-app.netlify.app/' target='_blank'><button>Live Site </button></a>
              </div>

              <br/>
              <br/>
              <br/>
              
              <div className='Project'>
                <h3>Project Name : To Do App</h3>
                <iframe className='ProjectIframe' src="https://jahids-to-do-app.netlify.app/" height="320" width="320" title="To Do App" loading='lazy'></iframe> 
                <h4>Used Technology : HTML , CSS , JavaScript , CDN</h4>
                <a href='https://github.com/hmjahid/To-Do-App' target='_blank'><button>Source Code</button></a>
                <a href='https://jahids-to-do-app.netlify.app/' target='_blank'><button>Live Site </button></a>
              </div>

              <br/>
              <br/>
              <br/>
              
              <div className='Project'>
                <h3>Project Name : Farmers Kingdom Web Application</h3>
                <iframe className='ProjectIframe' src="https://farmerskingdom.netlify.app/" height="320" width="320" title="Farmers Kingdom Web Application" loading='lazy'></iframe> 
                <h4>Used Technology : HTML , CSS , Bootstrap , CDN , AJAX , API , Google API , Windy API , Font-Awesome</h4>
                <a href='https://github.com/hmjahid/FarmersKingdom' target='_blank'><button>Source Code</button></a>
                <a href='https://farmerskingdom.netlify.app/' target='_blank'><button>Live Site </button></a>
              </div>

              <br/>
              <br/>
              <br/>

              <div className='Project'>
                <h3>Project Name : SoftTech - Software Development Company Website Clone</h3>
                <iframe className='ProjectIframe' src="https://softtech1.netlify.app/" height="320" width="320" title="SoftTech - Software Development Company Website Clone" loading='lazy'></iframe> 
                <h4>Used Technology : HTML , CSS</h4>
                <a href='https://github.com/hmjahid/SoftTech' target='_blank'><button>Source Code</button></a>
                <a href='https://softtech1.netlify.app/' target='_blank'><button>Live Site </button></a>
              </div>

              <br/>
              <br/>
              <br/>

              <div className='Project'>
                <h3>Project Name : OutFits - An E-commerce Web Application</h3>
                <iframe className='ProjectIframe' src="https://outfits1.netlify.app/" height="320" width="320" title="OutFits - An E-commerce Web Application" loading='lazy'></iframe> 
                <h4>Used Technology : HTML , CSS , Bootstrap , CDN</h4>
                <a href='https://github.com/hmjahid/OutFits' target='_blank'><button>Source Code</button></a>
                <a href='https://outfits1.netlify.app/' target='_blank'><button>Live Site </button></a>
              </div>
          </div>
        </section>

        <br/>
        <br/>
        <br/>

        <section className='WordpressProjects'>
          <h2 style={{color: "white", fontSize: "32px"}}><u>Wordpress Projects</u>:</h2>
            <div className='ProjectDetails'>
              <div className='Project'>
                <h3>Project Name : Alpha Web Services - Web services company website</h3>
                <iframe className='ProjectIframe' src="https://alphawebservices.wpdevcloud.com/" height="320" width="320" title="Alpha Web Services - Web services company website" loading='lazy'></iframe> 
                <h4>Used Technology : Wordpress, Elementor Page Builder, Astra Theme, Envato Elements, Jetpack</h4>
                <a href='https://alphawebservices.wpdevcloud.com/' target='_blank'><button>Live Site </button></a>
              </div>
            </div>
        </section>

    </div>
  )
}

export default Projects;