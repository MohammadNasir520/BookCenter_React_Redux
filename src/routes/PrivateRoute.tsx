import React from 'react';
import { useAppSelector } from '../Redux/hook';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useAppSelector(state => state.user.user);
  console.log('user', user);

  const location = useLocation();
  if (user) {
    return <div>{children}</div>;
  }
  return <Navigate to={'/signin'} state={location}></Navigate>;
};

export default PrivateRoute;
