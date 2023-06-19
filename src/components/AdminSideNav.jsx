import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/DashboardLayout.scss'

const AdminSideNav = () => {
return (
<div className='admin-sidenav'>
    <ul>
        <li><NavLink to={'/dashboard-news'} style={{marginTop:"10px"}}> News  </NavLink></li>
        <li><NavLink to={'/dashboard-teachers'}> Teachers </NavLink></li>
        <li><NavLink to={'/dashboard-notice'}> Notice </NavLink></li>
    </ul>
</div>
);
};

export default AdminSideNav;