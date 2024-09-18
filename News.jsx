import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import young from "./asset/young_entrepreneur_workshop.webp"
import small from "./asset/small_shops.webp"
import merifasal from "./asset/meri_fasal_mera_byora.webp"

export default function News() {
  return (
   <>
   <div className="news-bg">
    <h2>The News from Our Blog
    </h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</p>
    <div className="news-card">
    <Container>
      <Row >
        <Col lg={4} md={6} sm={12} xs={12}><Card className='cart'>
      <Card.Img variant="top" src={young} />
      <Card.Body>
        <Card.Title className='head'>The security risks of changing package owners</Card.Title>

       
        <Card.Text className='ctext'>
        by Ankit
        <br />
        Entrepreneurship development programmes (EDPs) play a crucial role in nurturing new businesses and equipping entrepreneurs with the skills needed to succeed in today's dynamic market. By focusing on skill development, EDPs empower individuals to realize their full potential, ultimately driving economic growth and job creation.
        </Card.Text>
        <Button variant="transoerent">Read More </Button>
      </Card.Body>
    </Card></Col>

        <Col lg={4} md={6} sm={12} xs={12}><Card  className='cart'>
      <Card.Img variant="top" src={small} />
      <Card.Body>
        <Card.Title>Micro Enterprises Face Loan Defaults Under Government's Emergency Credit Line Guarantee Scheme</Card.Title>
        <Card.Text>
        by Ankit <br />
        Discover how India's micro-enterprises face loan defaults under the Emergency Credit Line Guarantee Scheme, impacting 17.27 lakh units.
        </Card.Text>
        <Button variant="transperent">Read More</Button>
      </Card.Body>
    </Card></Col>
        <Col lg={4} md={6} sm={12} xs={12}><Card className='cart'>
      <Card.Img variant="top" src={merifasal} />
      <Card.Body>
        <Card.Title>Revolutionizing Indian Agriculture Through Meri Fasal Mera Byora Initiative for Custom Farming Solutions</Card.Title>
        <Card.Text>
        by Ankit <br />
        Explore how India's Meri Fasal Mera Byora initiative empowers farmers with personalized agricultural solutions, promoting sustainable p
        </Card.Text>
        <Button variant="transperent">Read More</Button>
      </Card.Body>
    </Card></Col>
      </Row>
    </Container>
    </div>
   </div>
   </>
  )
}
