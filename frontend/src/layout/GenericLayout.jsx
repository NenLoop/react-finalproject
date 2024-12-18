import React from 'react';
import {Outlet} from 'react-router-dom';
import Sidebar from '../components/common/SideBar';

const GenericLayout = () => {
  return (
    <>
    <Sidebar />
    <Outlet />
    </>
  )
}

export default GenericLayout
