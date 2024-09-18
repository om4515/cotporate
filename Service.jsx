import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import Footer from './Footer';
import { FaGear } from "react-icons/fa6";
export default function Service() {
  return (
   <>
   <div className="bg">
    <div className="containers">
     

        <h2>Our services</h2>
        
        <p >Our team offers a wide range of products and services to small <br /> and medium business enterprises.</p>
        <br /> <br />
 <Container>
      <Row>
        <Col lg={6} md={12} sm={12}><Card className='carrds'>
       
      <Card.Body > <div className="gearicon">
      <FaGear className='icon'/>
      </div>
      <h3>Business Registration</h3> 
      <p>Get your business registered as a partnership, private limited, limited liability partnership (LLP), or MSME/Udyam. We help you guide through the application procedure and apply for the right business category.</p>
      </Card.Body>
    </Card></Col>
    <Col lg={6} md={12} sm={12}><Card className='carrds'>
      <Card.Body > <h3>Import-export code (IEC)</h3> 
      <p>Import and export activities require you to have a 10-digit IEC number. You can apply for your IEC code with DGFT and start running your business.</p>
      </Card.Body>
    </Card></Col>
      </Row>
      <br />
      <Row>
        <Col lg={6} md={12} sm={12} ><Card className='carrds'>
      <Card.Body > <h3>Personal income tax e-filing</h3> 
<p>File your income tax returns with convenience using our e-filing portal. Anyone with no accounting knowledge can use our e-filing portal to file taxes directly.</p>      </Card.Body>
    </Card></Col> 
    <Col lg={6} md={12} sm={12}>
    <Card className='carrds'>
      <Card.Body > <h3>Set up deadline reminders</h3> 
      <p>Never get late anymore! Set up deadline reminders to ensure every task gets carried out well in time. Plan out multiple tasks as per priority.</p>
      </Card.Body>
    </Card></Col>
      </Row>
    </Container>
    
    </div>
   
  
   </div>
   </>
  )
}
