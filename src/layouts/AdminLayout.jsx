import React, { Children } from 'react';
import { Col,  Row } from 'react-bootstrap';
import '../assets/adminlayout.scss'
import AdminHeader from '../Components/AdminHeader';
import AdminSideNav from '../Components/AdminSideNav';
import DashboardNews from '../pages/DashboardNews';

const AdminLayout = ({children}) => {
    return (
        <div id='admin-layout'>
          <div id={"adminContainer"} >
            <AdminHeader/>
             <Row style={{margin:0}}>
              <Col lg={2}  style={{padding:0}}>
                <AdminSideNav/>
              </Col>
              <Col lg={10} style={{padding:0 , background:'white '}}>
                {children}
              </Col>
            </Row>
        </div>
        </div>
    );
};

export default AdminLayout;