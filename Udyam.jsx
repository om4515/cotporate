import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import procedure from "./asset/procedure.webp"
export default function Udyam() {
  return (
  <>
  <div className="udyam-bg">
    <div className="detail">
      <Container>
        <Row>
            <Col lg={6} md={12} sm={12}>
            <h1>Get your UDYAM  <br /> registration now!</h1>
            <p>Udyam Registration or MSME Registration is the new <br /> process for registering MSME (micro, small and <br /> medium enterprises) launched by the Ministry of <br /> Micro, Small & Medium Enterprises on July 1, 2020. The <br /> Ministry had also revised the definition of MSMEs from <br /> the same date.</p>
            <p>An enterprise for this process is known as Udyam, <br /> and its Registration Process is known as Udyam <br /> Registration. A permanent registration number along <br /> with a recognition certificate will be issued after <br />Registration.</p>

            <a href=""> <button>Get Started</button></a>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className="contact">
                <div className="form">
                  <label htmlFor="">Name Of Applicant</label>
                    <input type="text" name="" id=""  placeholder='Enter Name Of Applicant'/> <br />
                    <label htmlFor="">Name of Enterprise</label>
 
                     <input type="text" name="" id="" placeholder='Enter Name Of Enterprises'/> <br />
                     <label htmlFor="">Email</label>

                     <input type="text" name="" id="" placeholder='Enter Your Email' /> <br />
                     <label htmlFor="">Enter Your Number</label>

                     <input type="text" name="" id=""  placeholder='Enter Your Mobile Number'/> 
                     <button className='submit'>Submit</button>

                </div>
              </div>
            </Col>

        </Row>
      </Container>
      <div className="regestration">
        <h2>Registration Procedure</h2>
        <img src={
          procedure
        } alt="" />
      </div>
      <div className="benifits">
     <h2> What Are Benefits Of UDYAM?</h2>
     <p>Udyam registration is a mandatory certification for micro, small, and <br /> medium enterprises (MSMEs) in India. It provides various benefits and <br /> facilities offered by the government and improves the  credibility of the <br /> business.
     <Container>
      <Row>
        <Col lg={6} md={12} sm={12}><Card className='carrd'>
      <Card.Body > <h3>Government Benefits</h3> 
      <p>MSMEs with Udyam registration are eligible to  avail of various subsidies, loans, and tax exemptions offered by the government.</p>
      </Card.Body>
    </Card></Col>
    <Col lg={6} md={12} sm={12}><Card className='carrd'>
      <Card.Body > <h3>Tender Eligibility</h3> 
      <p>MSMEs can participate in government tenders, providing new business opportunities.</p>
      </Card.Body>
    </Card></Col>
      </Row>
      <br />
      <Row>
        <Col lg={6} md={12} sm={12} ><Card className='carrd'>
      <Card.Body > <h3>Easy Loan Access</h3> 
<p>Udyam registered MSMEs can access loans from banks and financial institutions at favourable terms and interest rates.</p>      </Card.Body>
    </Card></Col> 
    <Col lg={6} md={12} sm={12}>
    <Card className='carrd'>
      <Card.Body > <h3>Improved Credibility</h3> 
      <p>The Udyam certificate serves as proof of MSME status and enhances the credibility of the business, making it easier to do business with larger firms and government agencies.</p>
      </Card.Body>
    </Card></Col>
      </Row>
    </Container>
</p>
      </div>
    </div>
  </div>
  </>
  )
}
