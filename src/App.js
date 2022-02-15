
import './App.css';
import {Route} from 'react-router-dom';
import Login from './pages/Login';
import { Col, Row } from 'reactstrap';
import Header from './components/header/Header';
import LeftMenu from './components/left-menu/LeftMenu';
import Home from './pages/home/Home';
import Payments from './pages/payments/Payments';
import Apartments from './pages/apartments/Apartments';
import Tenant from './pages/tenant/Tenant';
import THome from './pages/tenant-page/THome';
import Chats from './pages/chats/Chats';
import TeanantHeader from './components/tenant-header/TeanantHeader';


function App() {
  return (
    <div className="App">
    <Route path="/login">
       <Login/>
    </Route>
    <Route path="/admin">
     
      <Row>
           <Col className='col-2 left-content'>
            <LeftMenu/>
           </Col>
           <Col className='col-10 right-content'>
               <Header/>
               <Route path="/admin/home" exact>
                 <Home/>
               </Route>
               <Route path="/admin/tenant" exact>
                 <Tenant/>
               </Route>
               <Route path="/admin/payments" exact>
                 <Payments/>
               </Route>
               <Route path="/admin/apartments" exact>
                 <Apartments/>
               </Route>
               <Route path="/admin/chats" exact>
                 <Chats/>
               </Route>
               
           </Col>
      </Row>
    </Route>
    <Route path="/" exact>
          <TeanantHeader/>
          <Route path="/" exact>
            <THome/>
          </Route>
             
    </Route>
      
  

    </div>
  );
}

export default App;
