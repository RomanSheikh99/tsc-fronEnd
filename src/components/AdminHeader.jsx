import React from 'react';
import moment from "moment/moment";
import '../assets/adminlayout.scss'
import { Button, Card,  Nav, Navbar } from "react-bootstrap";

const AdminHeader = () => {
    return (
        <Navbar className='admin-header'>
        <Card.Subtitle className="mb-2 ps-2 text-white">{moment().format('dddd, Do MMMM YYYY, h:mm:ss a')}</Card.Subtitle>
          <Nav className="ms-auto pe-2">
            <Button variant="outline-light">English</Button>
          </Nav>
      </Navbar>
    );
};

export default AdminHeader;