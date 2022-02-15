import React from 'react'
import { Container } from 'reactstrap';
import InfoPay from '../../components/info-pay/InfoPay';
import RecentActivities from '../../components/recent-activities/RecentActivities';
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import './t-home.css'

const THome = ()=> {
    const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
      };
  return (
    <div>
        <Container>
            
            <InfoPay/>
            <RecentActivities/>
           
        </Container>
        <Widget
            handleNewUserMessage={handleNewUserMessage}
            title="SOFTA APARTMENTS"
            subtitle="Aizat Esenbekova"
            emojis="false"
         
        />
    </div>
  )
}
export default THome;
