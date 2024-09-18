import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import mix from "./asset/mix.png"
export default function About() {
  return (
   <>
   <div className="about-bg">
     
    <Container className='conte'>
        <Row>
            <Col lg={6} md={12} sm={12}>
            <span>ABOUT US</span>
            <h2>Helping busy entrepreneurs handle their business operations efficiently!</h2>
            <p>Welcome to India Corporates! We are dedicated to helping businesses of all sizes navigate the complex business registration and legal compliance world. Our team of experienced professionals has the knowledge and expertise to ensure that your business is legally established and compliant with all relevant laws and regulations. Here is a comprehensive list of the services we offer:</p>
            <ul>
                <li><span className='first'>Company Registration</span> </li>
                <li><span className='second'>Trademark Protection</span>
                </li> <br />
                <li><span className='first'>  GST Filing</span></li>
                <li><span className='second'> IT solutions</span></li>
            </ul>
            </Col>
            <Col lg={6} md={12} sm={12}>
            <img src={mix} alt="" />
            </Col>
        </Row>
    </Container>
   </div>
   </>
  )
}
