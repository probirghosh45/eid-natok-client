import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequiredAuth = ({ children }) => {
    
    let [user,loading,error] = useAuthState(auth);
    let location = useLocation();
   
    if(loading){
        return <p className=' text-center text-pink-500 '>loading ...</p>
    }


    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
    
      return children;
};

export default RequiredAuth;

