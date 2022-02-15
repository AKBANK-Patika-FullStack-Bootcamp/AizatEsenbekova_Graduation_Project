import React from 'react';
import './user-info.css';

const UserInfo = () => {
  return (
    <>
      <div className="card user-card">
                <div className="card-header">
                    <h5>Profile</h5>
                </div>
                <div className="card-block">
                    <div className="user-image">
                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="img-radius" alt="User-Profile-Image"/>
                    </div>
                    <h6 className="f-w-600 m-t-25 m-b-10">Alessa Robert</h6>
                    <p className="text-muted">Active | Male | Born 23.05.1992</p>
                    <hr/>
                    <p className="text-muted m-t-15">Activity Level: 87%</p>
                    <ul className="list-unstyled activity-leval">
                        <li className="active"></li>
                        <li className="active"></li>
                        <li className="active"></li>
                        <li></li>
                   
                    </ul>
                    <div className="">
                    <ul className="list-unstyled text-start">
                        <li>Phone: 05523371080</li>
                        <li>Email: aizat@gmail.com</li>
                        <li>TC No: 99969092058</li>
                        <li>Appart. No: 13</li>
                   
                    </ul>
                    </div>
                    
                  
                </div>
        </div> 
    </>   
  );
};
export default UserInfo;