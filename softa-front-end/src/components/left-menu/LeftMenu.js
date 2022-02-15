import React from 'react';
import {NavLink} from 'react-router-dom';
import './left-menu.css';
import {BsHouse,BsPeopleFill,BsWallet2,BsBuilding} from "react-icons/bs";




 const LeftMenu = ()=> {
   
  return (
    <div className='border-right'>
       <div className='left-menu-header'>
            SOFTA APARTMENTS
       </div>
       <div className='left-menu-body'>
           <ul>
            
               <li>
                 <NavLink activeClassName='active' className='menu-link' to="/admin/home">  <BsHouse className='menu-icon'/> Dashboard</NavLink>
               </li>
               <li>
               <NavLink activeClassName='active' className='menu-link' to="/admin/tenant">  <BsPeopleFill className='menu-icon'/> Tenant</NavLink>
               </li>
               <li>
               <NavLink activeClassName='active' className='menu-link' to="/admin/payments">  <BsWallet2 className='menu-icon'/> Payments </NavLink>
               </li>
               <li>
               <NavLink activeClassName='active' className='menu-link' to="/admin/apartments">  <BsBuilding className='menu-icon'/> Apartments </NavLink>
               </li>
           </ul>
       
           <div>
           <hr></hr>
         
           </div>
           
       </div>
    </div>
  )
}

export default LeftMenu;