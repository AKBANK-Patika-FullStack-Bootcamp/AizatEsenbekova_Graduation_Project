import React from "react";
import './tenant.css';


const TenantObj = () => {
  return (
    <div>
      <div className="person" data-chat="person1">
        <div className="user">
          <img
            src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
            alt="Retail Admin"
          />
          <span className="status busy"></span>
        </div>
        <p className="name-time">
          <span className="name">Steve Bangalter</span>
          <span className="time">15/02/2019</span>
        </p>
      </div>
    </div>
  );
};
export default TenantObj;
