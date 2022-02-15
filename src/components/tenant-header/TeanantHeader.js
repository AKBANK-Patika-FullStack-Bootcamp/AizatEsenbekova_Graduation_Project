import React from 'react'
import { Popover, Container } from "reactstrap";
import "./t-header.css";
import UserInfo from "../user-info/UserInfo";



const TeanantHeader = ()=> {
    const [userInfo, setModal] = React.useState(false);

    // Toggle for Modal
    const toggle = () => setModal(!userInfo);
    return (
      <div>
     
        <header className="mb-3 border-bottom ">
        
          <div className="d-flex justify-content-between container-fluid  align-items-center wrapper px-5">
         
            <div className="w-75 text-start">
              <h2>SOFTA APARTMENTS</h2>
            </div>
  
            <div className="d-flex justify-content-end align-items-center w-25">
             
              <div className="flex-shrink-0 dropdown user-icon">
                <div  id="Popover1" type="button" onClick={toggle}>
                  <img
                    src="https://github.com/mdo.png"
                    alt="mdo"
                    width="32"
                    height="32"
                    className="rounded-circle"
                  />
                </div>
                <Popover
                  flip
                  placement="bottom"
                  target="Popover1"
                  isOpen={userInfo} toggle={toggle}
                  className="popov"
                >
  
              
                    <UserInfo/>
            
                </Popover>
              </div>
            </div>
            
          </div>
          
        </header>
       
      </div>
      
    );
}

export default TeanantHeader;
