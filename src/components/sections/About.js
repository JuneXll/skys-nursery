import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

const iconImg = 'https://ik.imagekit.io/diversifiedtax/Sky_s_Nursery/CirclePlant.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642450038427'

const About = () => {
    return(
        <div className='about-div cover-container d-flex flex-column align-items-center'>
            <Container id="about" className='my-auto'></Container>
            <Container>
                <Row className='d-flex justify-content-center'>
                    <Col className='col-xl-5 col-md-6 col-sm-10 col-xs-12 '>
                        <img src={iconImg} className='plant-icon-img' alt='plant-icon'/>
                    </Col>
                    <Col className='col-xl-7 col-md-6 col-sm-10 col-xs-12 d-flex flex-column justify-content-center'>
                        <h1>About Us</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <h2>Business Hours:</h2>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;