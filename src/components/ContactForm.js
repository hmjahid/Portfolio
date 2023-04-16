import Container from 'react-bootstrap/Container';
import './ContactForm.css';
import { Button } from 'bootstrap';
{/** 
import 'bootstrap/dist/css/bootstrap.min.css';
*/}

const ContactForm = () => {
  return (
    <div className="Container">
        <Container>
        <h1 className='ContactFormTitle'>GET IN TOUCH</h1>
        <p>Got a question? Let's talk!</p>
            <form target="_blank" action="https://formsubmit.co/mdjahidhasan919@gmail.com" method="POST">
                <div class="form-group">
                <div class="form-row">
                    <div class="col">
                    <input type="text" name="name" class="form-control" placeholder="Full Name" required />
                    </div>
                    <div class="col">
                    <input type="email" name="email" class="form-control" placeholder="Email Address" required />
                    </div>
                </div>
                </div>
                <div class="form-group">
                <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
                </div>
                <button type="submit" class="btn btn-lg btn-dark btn-block">Submit</button>
            </form>
        </Container>
    </div>
  )
}

export default ContactForm;