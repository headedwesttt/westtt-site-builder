import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useStore } from '../../store';
import { UserContext } from '../../UserContext';
import { magic } from '../../utils/magic';

interface ProtectedRouteType {
  redirectPath?: string;
  children: JSX.Element;
}

// export const ProtectedRoute = ({ redirectPath = '/login', children }: ProtectedRouteType) => {
//   const user = useStore((state) => state.user);
//   console.log('user', user);
//   if (user) return children;
//   return <Navigate to={redirectPath} replace />;
// };

export const ProtectedRoute = ({ redirectPath = '/login', children }: ProtectedRouteType) => {
  // const user = useStore((state) => state.user);
  // console.log('user', user);
  //   const [userStatus, setUserStatus] = useState(true);
  //   useEffect(() => {
  //     const getUserStatus = async () => {
  //       const us = await magic.user.isLoggedIn();
  //       console.log('us', us);
  //       setUserStatus(us);
  //     };
  //     getUserStatus();
  //   }, []);

  const [user, setUser] = useContext(UserContext);

  if (user) return children;
  return <Navigate to={redirectPath} replace />;
};
