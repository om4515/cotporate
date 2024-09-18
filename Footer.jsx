import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import logo from "./asset/logo.webp"
import shape  from "./asset/shape1.png"
export default function Footer() {
  return (
    <>
    <div className="footer-bg">
     <Container>
        <Row>
          
            <Col lg={3} md={6} sm={12}>
           
            <img src={logo} alt="" />
            <p>We are dedicated to helping businesses of all sizes navigate the complex business registration and legal compliance world</p>

            </Col>
            <Col lg={3} md={6} sm={12}>
               <h3>Company</h3>
               <a href="">
                About Us
               </a> <br />
               <a href="">Udyam Regestration</a>
               <br />
               <a href="">IFSC</a> <br />
               <a href="">GST</a><br />
               <a href="">blog</a>
            </Col>
            <Col lg={3} md={6} sm={12}>
            <h3>Support</h3>
            <a href="">Privacy Policy</a> <br />
            <a href="">Terms & Condition</a> <br />
            <a href="">Contact Us</a> <br />

            </Col>
            <Col lg={3} md={6} sm={12}>
            <h3>Address</h3>
            <li>311 B, Shree Nand Dham, Sector 11, CBD Belapur, Navi Mumbai, 400614</li>
            <li>Email: <br />
                <a href="">  support@indiacorporates.com</a>

            </li>
            <li>Phone: <a href="" >7875335587</a></li>
            </Col>
        </Row>
     </Container>
    </div>
    </>
  )
}
