import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import contact from "./asset/contact2.png"
import logo from "./asset/logo.webp"
export default function Contact() {
  return (
    <>
    
    <div className="contact-bg">
    <div className='add'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.0874074536796!2d73.03610372497575!3d19.01586968217644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3ebf86dbd7b%3A0x18af6f26107e9e2a!2sIndiaCorporates!5e0!3m2!1sen!2sin!4v1724675385384!5m2!1sen!2sin" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>


    <div className="contact-de">
        <Container>
            <Row>
                <Col lg={4} md={6} sm={12} xs={12}>
                <Card className='Card'>
      <Card.Body>
       <h3>Mail Here</h3> 
        <a href="">supportindiacorporate@gmail.com</a>
      </Card.Body>
    </Card>
                </Col>
                
                <Col lg={4} md={6} sm={12} xs={12}>
                <Card className='Card'>
      <Card.Body>
       <h3>Visit Here</h3> 
        <a href="">311 B, Shree Nand Dham, Sector 11, CBD Belapur, Navi Mumbai, 400614</a>
      </Card.Body>
    </Card>

                </Col>
                <Col lg={4} md={6} sm={12} xs={12}>
                <Card className='Card'>
      <Card.Body>
       <h3>Call Here
       </h3> 
        <a href="">+(91) 806 910 4800</a>
      </Card.Body>
    </Card>
                </Col>
            </Row>
        </Container>
    </div>
    <div className="c-form">
        <h2>Get In Touch With Us</h2>
        <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
        <Container>
            <Row>
                <Col lg={6} md={12} sm={12}>
                <img src={contact}alt="" />
                </Col>
                <Col lg={6} md={12} sm={12}>
               <input type="text" placeholder='Name' />
               <input type="email" name="" id="" placeholder='Email' />
               <input type="number" name="" id="" placeholder='Number' />
               <input type="text" name="" id=""  placeholder='Subject'/>
               <input type="text" name="" id="msg"  placeholder='Message'/>
               <button>Send </button>
                </Col>
               
            </Row>
           
        </Container>
     
    </div>
       
        </div>
        
        </>
  )
}
