import './Projects.css';

const Projects = () => {
  return (
    <div className="Projects" id='Projects'>
        <h2 className='ProjectsHeading'>Projects</h2>
        <section className='ProjectsSection'>
        <h2 style={{color: "white"}}><u>My Projects</u></h2>

      <div className='ProjectDetils'>
        
      <br/>

        <div className='Project1'>
          <h3>Project Name : Portfolio</h3>
          <h4>Used Technology : HTML , CSS , JavaScript , React.js</h4>
          <a href='https://github.com/hmjahid/Portfolio' target='_blank'><button>Source Code</button></a> &nbsp;&nbsp;
          <a href='https://hmjahid.netlify.app/' target='_blank'><button>Live Site </button></a>
        </div>

        <br/>
        <br/>

        <div className='Project2'>
          <h3>Project Name : My First React App</h3>
          <h4>Used Technology : HTML , CSS , JavaScript , React.js</h4>
          <a href='https://github.com/hmjahid/My-First-React-App' target='_blank'><button>Source Code</button></a> &nbsp;&nbsp;
          <a href='https://hmjahid-my-first-react-app.netlify.app/' target='_blank'><button>Live Site </button></a>
        </div>

        <br/>
        <br/>
        
        <div className='Project3'>
          <h3>Project Name : To Do App</h3>
          <h4>Used Technology : HTML , CSS , JavaScript , CDN</h4>
          <a href='https://github.com/hmjahid/To-Do-App' target='_blank'><button>Source Code</button></a> &nbsp;&nbsp;
          <a href='https://jahids-to-do-app.netlify.app/' target='_blank'><button>Live Site </button></a>
        </div>

        <br/>
        <br/>
        
        <div className='Project4'>
          <h3>Project Name : Farmers Kingdom Web Application</h3>
          <h4>Used Technology : HTML , CSS , Bootstrap , CDN , AJAX , API , Google API , Windy API , Font-Awesome</h4>
          <a href='https://github.com/hmjahid/FarmersKingdom' target='_blank'><button>Source Code</button></a> &nbsp;&nbsp;
          <a href='https://farmerskingdom.netlify.app/' target='_blank'><button>Live Site </button></a>
        </div>

        <br/>
        <br/>

        <div className='Project5'>
          <h3>Project Name : SoftTech - Software Development Company Website Clone</h3>
          <h4>Used Technology : HTML , CSS</h4>
          <a href='https://github.com/hmjahid/SoftTech' target='_blank'><button>Source Code</button></a> &nbsp;&nbsp;
          <a href='https://softtech1.netlify.app/' target='_blank'><button>Live Site </button></a>
        </div>

        <br/>
        <br/>

        <div className='Project5'>
          <h3>Project Name : OutFits - an e-commerce Web Application</h3>
          <h4>Used Technology : HTML , CSS , Bootstrap , CDN</h4>
          <a href='https://github.com/hmjahid/OutFits' target='_blank'><button>Source Code</button></a> &nbsp;&nbsp;
          <a href='https://outfits1.netlify.app/' target='_blank'><button>Live Site </button></a>
        </div>
     </div>
        </section>
    </div>
  )
}

export default Projects;