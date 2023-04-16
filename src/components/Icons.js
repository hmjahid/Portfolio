import linkedin from'./linkedin.svg';
import linkedin1 from './linkedin(1).svg';
import github from './github.svg';
import github1 from './github(1).svg';
import twitter from'./twitter.svg';
import twitter1 from './twitter(1).svg';
import facebook from './facebook.svg';
import facebook1 from './facebook(1).svg';
import instagram from'./instagram.svg';
import instagram1 from './instagram(1).svg';
import './Icons.css';


const Icons = () => {
  return (
    <section className='IconsSection'>
        <a href='https://github.com/hmjahid' target='_blank'>
          <img src={github} alt='Github Icon' style={{height: '30px', width: '30px'}}/>
        </a>
        <a href='https://www.linkedin.com/in/md-jahid-hasan-584712243/' target='_blank'>
          <img src={linkedin} alt='Linkedin Icon' style={{height: '30px', width: '30px'}}/>
        </a>
        <a href='https://twitter.com/mdjahidhasan919' target='_blank'>
          <img src={twitter} alt='Twitter Icon' style={{height: '30px', width: '30px'}}/>
        </a>
        <a href='https://www.facebook.com/mdjahidhasan52443' target='_blank'>
          <img src={facebook} alt='Facebook Icon' style={{height: '30px', width: '30px'}}/>
        </a>
        <a href='https://www.instagram.com/md_jahid_hasan52443/' target='_blank'>
          <img src={instagram} alt='Instagram Icon' style={{height: '30px', width: '30px'}}/>
        </a>
    </section>
  )
}

export default Icons;