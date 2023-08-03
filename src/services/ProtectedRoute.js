import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export default function ProtectedRoute(){

const auth = localStorage.getItem("loggedIn")

  return auth ? <Outlet/> : <Navigate to = {"/Login"}/>
}
