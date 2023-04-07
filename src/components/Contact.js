import './Contact.css';

const Contact = () => {
  return (
    <div className="Contact" id='ContactMe'>
        <h2 className='ContactHeading'>Contact Me</h2>
        <section className='ContactSection'>
        <h2 style={{color: "white"}}><u>Want to Contact Me ?</u></h2>
        <a href="https://join.skype.com/invite/ualzWlKSdoxS" target='_blank'><button>Skype</button></a>
        <br/>
        <br/>
        <a href="https://wa.me/+8801771749213" target='_blank'><button>WhatsApp</button></a>
        <br/>
        <br/>
        <a href="mailto:mdjahidhasan919@gmail.com" target='_blank'><button>Send Email</button></a> 
        <br/>
        <br/>
        <a href="tel:+8801771749213" target='_blank'><button>Call Me</button></a> 
        </section>
    </div>
  )
}

export default Contact;