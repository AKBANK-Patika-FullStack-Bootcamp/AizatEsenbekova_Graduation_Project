import React from 'react'
import { Col, Container,Row } from 'reactstrap';
import HavePaid from '../../components/have-paid/HavePaid';
import HaventPayYet from '../../components/havent-payedyet/HaventPayedYet';


const Payments = () => {
  return (
    <div>
        <Container>
          <Row className='mt-5'>
            <Col className='col-6'><HavePaid/></Col>
            <Col className='col-6'><HaventPayYet/></Col>
          </Row>
        </Container>
    </div>
  )
}

export default Payments;