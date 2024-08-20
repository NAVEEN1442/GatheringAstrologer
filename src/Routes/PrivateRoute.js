import { logDOM } from '@testing-library/react';
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {
  
    const {token} = useSelector((state)=>state.auth);
    console.log("token",token);
    

    if(token === null){
        return <Navigate to="/login" />
    }
    else{
        return children
    }

}

export default PrivateRoute