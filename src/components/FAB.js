{/**

import React from 'react';
import { Container, Button, Link, lightColors, darkColors} from 'react-floating-action-button';
import './FAB.css';
import Home from './house-solid.svg';


const FAB = () => {
    return (
        <section className='FloatingSection'>
            <Container>
            <Link href="#ContactMe"
                tooltip="Contact"
                icon="far fa-sticky-note"
                className='link2' />
            <Link href="#HireMe"
                tooltip="Hire"
                icon="fas fa-user-plus" 
                className="fab-item btn btn-link btn-lg text-black link1" />
            <Button className='FloatingButton'
                tooltip="Home"
                icon="fas fa-plus"
                rotate={true}
                onClick={() => window.location.replace('#Intro')}
                styles={{backgroundColor : lightColors.azure, color: darkColors.black}}
                />
        </Container>
        </section>
    )
}

export default FAB;

*/}