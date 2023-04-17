import './Footer.css';
import Icons from './Icons';
import HomeIcon from './house-solid.svg';
import HomeIcon1 from './house-solid(1).svg';

const Footer = () => {
  return (
    <section className='Footer' id='Footer'>
       <footer className='FooterSection'>

       <Icons />

       <h5 className='Copyright'>Copyright &copy; 2023 Md Jahid Hasan. All Rights Reserved &reg;</h5>
       
       <a href="#Intro"><img src={HomeIcon1}/></a>
       </footer>
    </section>
  )
}

export default Footer;