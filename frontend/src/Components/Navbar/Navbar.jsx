import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { MdOutlineAccountCircle } from "react-icons/md";
import { RiCalendarTodoLine } from "react-icons/ri";


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <RiCalendarTodoLine size={30} style={{ marginRight: '10px',marginTop:'3px' }} />
          <a className="navbar-brand" href="#">TODO</a>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active home " aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link about " href="/about">About</a>
              </li>
              <li className="nav-item signup">
                <a className="nav-link" href="todo">Todo</a>
              </li>
              <li className="nav-item signup">
                <a className="nav-link" href="#">Signup</a>
              </li>
              <li className="nav-item register">
                <a className="nav-link" href="#">Register</a>
              </li>
              <li className="nav-item register">
                <a className="nav-link" href="#">Log out</a>
              </li>
              <MdOutlineAccountCircle size={40}  style={{ marginTop: '4px' }} />
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
