import React from 'react'
import { Col, Container,Row } from 'reactstrap';
import HomeHeaderCard from '../../components/home-header-card/HomeHeaderCard';
import RecentActivities from '../../components/recent-activities/RecentActivities';

const Home = () => {
  return (
    <div>
        <Container>
          <Row>
            <Col className='col-4'>
             <HomeHeaderCard/>
            </Col>
            <Col className='col-4'>
            <HomeHeaderCard/>
            </Col>
            <Col className='col-4'>
            <HomeHeaderCard/>
            </Col>
          </Row>
          <Row className='mt-5 mb-5'>
            <Col className='col-12'>
              <RecentActivities></RecentActivities>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Home;
