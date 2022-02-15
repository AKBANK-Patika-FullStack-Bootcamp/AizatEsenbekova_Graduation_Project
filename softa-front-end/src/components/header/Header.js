import React from "react";
import { Input, Form, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import "./Header.css";
import { BsFillChatTextFill } from "react-icons/bs";
import UserInfo from "../user-info/UserInfo";
import {NavLink} from 'react-router-dom';

const Header = () => {
  const [userInfo, setModal] = React.useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!userInfo);
  return (
    <div className="">
      <header className="mb-3 border-bottom ">
        <div className="d-flex justify-content-between container-fluid  align-items-center wrapper">
          <div className="w-75">
            <Form className="w-100">
              <Input
                type="search"
                className="form-control search-input"
                placeholder="Search..."
                aria-label="Search"
              />
            </Form>
          </div>

          <div className="d-flex justify-content-end align-items-center w-25">
            <div className="chats-icon">
            <NavLink activeClassName='active' className="chat-link" to="/admin/chats">  <BsFillChatTextFill /></NavLink>
             
            </div>

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
};

export default Header;
