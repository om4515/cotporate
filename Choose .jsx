import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import photo from "./asset/united design2.png";

export default function Choose() {
  return (
    <>
      <div className="man">
        <div className="cont">
          <Container>
            <Row>
              <Col lg={6} md={12} sm={12} className="text-section">
                <h2>Why Choose Us</h2>
                <p>
                  A small business owner must make the right choice while partnering with a business operations service provider. Our unique product offerings make us a valued partner for a growing business.
                </p>
                <img src={photo} alt="Unique Design" />
              </Col>
              <Col lg={6} md={12} sm={12}>
                <Container>
                  <Row>
                    <Col lg={6} md={12} sm={12}>
                      <Card className='cards2'>
                        <Card.Body>
                          <h3>Expertise and Knowledge</h3>
                          <p>
                            India Corporates has a team of experts with in-depth knowledge of the GST laws, rules, and regulations. We keep ourselves updated with the latest changes and developments in the GST system to provide accurate and reliable services to our clients.
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                      <Card className='cards'>
                        <Card.Body>
                     
                          <h3>Time-Saving and Hassle-Free</h3>
                          <p>
                            GST registration and compliance can be a time-consuming and complex process for businesses. By opting for our services, businesses can save time and effort, as we will handle all the formalities and procedures related to GST registration.
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6} md={12} sm={12}>
                      <Card className='cards2'>
                        <Card.Body>
                          <h3>Accuracy and Compliance</h3>
                          <p>
                            We at India Corporates ensure that our clients are in full compliance with the GST laws and regulations. We take care of all the paperwork and filings and make sure that the information provided is accurate and complete, reducing the risk of penalties or fines.
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                      <Card className='cards'>
                        <Card.Body>
                          <h3>Customized Solutions</h3>
                          <p>
                            We offer customized solutions to meet our client's specific needs and requirements. We understand the unique nature of each business and provide personalized and tailored services to ensure that our clients are in compliance with GST laws and regulations.
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
