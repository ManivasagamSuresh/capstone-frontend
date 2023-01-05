import React from 'react'
import { Outlet } from 'react-router-dom';
import Welcome from './Welcome';

function Portal() {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default Portal