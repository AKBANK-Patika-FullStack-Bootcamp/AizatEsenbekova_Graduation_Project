import React from "react";
import TenantObj from "../tenant-obj/TenantObj";
import './tenant-container.css';
import {BsSearch} from "react-icons/bs";

const TenantContainer = () => {
  return (
    <div>
      <div className="users-container">
        <div className="chat-search-box">
          <div className="input-group">
            <input className="form-control" placeholder="Search" />
            <div className="input-group-btn">
              <button type="button" className="btn btn-info">
                <BsSearch/>
              </button>
            </div>
          </div>
        </div>
        <div className="users">
         <TenantObj/>
         <TenantObj/>
         <TenantObj/>
        </div>
      </div>
    </div>
  );
};

export default TenantContainer;
