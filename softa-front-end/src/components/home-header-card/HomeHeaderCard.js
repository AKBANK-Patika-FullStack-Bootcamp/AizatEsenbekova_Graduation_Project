import React from 'react'
import { Card, CardBody, Col, Row,Progress, Container } from 'reactstrap';
import './card.css'

const HomeHeaderCard = () => {
  return (
    <div>
        <Container>
        <Card className='header-card'>
            <CardBody>
                <Row>
                    <Col className='col-3'>
                        <img className='card-img' src='https://kacrm.datamaticsbpm.com/assets/img/user-img-icon.png' />
                    </Col>
                    <Col className='col-9'>
                        <div className='text-start'>
                            <h3><span>25</span>/100</h3>
                            <span className='cart-title'>users</span>
                            <div>
                            <Progress value="25">
                               25%
                            </Progress>
                            </div>
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
        </Container>
    </div>
  )
}

export default HomeHeaderCard; 
