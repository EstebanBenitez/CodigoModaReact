import React from 'react'
import { Authcontext } from './AuthContext';
import { authReducer } from './authReducer';



const initialState ={
  logged:false,
}

export  const   AuthProvider = ({children}) => {


  userReducer [ state ,dispath ]  (authReducer, initialState);
 return(
    <Authcontext.Provider Value={{}}>
      {children}
    </Authcontext.Provider>
 );
}

