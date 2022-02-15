import React from "react";
import './msg.css';
import {BsCheck,BsCheck2All} from "react-icons/bs";

const MsgContainer = () => {
  return (
    <div>
      <div className="selected-user">
        <span>
          To: <span className="name">Emily Russell</span>
        </span>
      </div>
      <div className="chat-container">
        <ul className="chat-box chatContainerScroll">
          <li className="chat-left">
            <div className="chat-avatar">
              <img
                src="https://www.bootdey.com/img/Content/avatar/avatar5.png"
                alt="Retail Admin"
              />
              <div className="chat-name">Russell</div>
            </div>
            <div className="chat-text">
              Hello, I'm Russell.
              <br />
              How can I help you today?
            </div>
            <div className="chat-hour">
              08:55 
            </div>
          </li>
          <li className="chat-right">
            <div className="chat-hour">
            <BsCheck2All/> 08:56
            </div>
            <div className="chat-text">
              Hi, Russell
              <br /> I need more information about Developer Plan.
            </div>
            <div className="chat-avatar">
              <img
                src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                alt="Retail Admin"
              />
              <div className="chat-name">Sam</div>
            </div>
          </li>
          <li className="chat-left">
            <div className="chat-avatar">
              <img
                src="https://www.bootdey.com/img/Content/avatar/avatar5.png"
                alt="Retail Admin"
              />
              <div className="chat-name">Russell</div>
            </div>
            <div className="chat-text">
              Are we meeting today?
              <br />
              Project has been already finished and I have results to show you.
            </div>
            <div className="chat-hour">
              08:57 
            </div>
          </li>
          <li className="chat-right">
            <div className="chat-hour">
            <BsCheck2All/> 08:59 
            </div>
            <div className="chat-text">
              Well I am not sure.
              <br />I have results to show you.
            </div>
            <div className="chat-avatar">
              <img
                src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                alt="Retail Admin"
              />
              <div className="chat-name">Joyse</div>
            </div>
          </li>
          <li className="chat-left">
            <div className="chat-avatar">
              <img
                src="https://www.bootdey.com/img/Content/avatar/avatar5.png"
                alt="Retail Admin"
              />
              <div className="chat-name">Russell</div>
            </div>
            <div className="chat-text">
              The rest of the team is not here yet.
              <br />
              Maybe in an hour or so?
            </div>
            <div className="chat-hour">
              08:57 
            </div>
          </li>
          <li className="chat-right">
            <div className="chat-hour">
            <BsCheck2All/>  08:59 
            </div>
            <div className="chat-text">
              Have you faced any problems at the last phase of the project?
            </div>
            <div className="chat-avatar">
              <img
                src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                alt="Retail Admin"
              />
              <div className="chat-name">Jin</div>
            </div>
          </li>
          <li className="chat-left">
            <div className="chat-avatar">
              <img
                src="https://www.bootdey.com/img/Content/avatar/avatar5.png"
                alt="Retail Admin"
              />
              <div className="chat-name">Russell</div>
            </div>
            <div className="chat-text">
              Actually everything was fine.
              <br />
              I'm very excited to show this to our team.
            </div>
            <div className="chat-hour">
              07:00 
            </div>
          </li>
        </ul>
        <div className="form-group mt-3 mb-0">
          <textarea
            className="form-control"
           
            placeholder="Type your message here..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default MsgContainer;
