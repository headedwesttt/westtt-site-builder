import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { isUserLoggedIn } from '../../utils/isUserLoggedIn';
import { magic } from '../../utils/magic';

export const Dashboard = () => {
  const [loggedInStatus, setLoggedInStatus] = useState('broken');

  useEffect(() => {
    const uli = async () => {
      const u = await isUserLoggedIn();
      setLoggedInStatus(u);
    };
    uli();
  }, []);

  return (
    <div>
      <p>dashboard</p>
      <Link to="login">login link</Link>
      <p>isLoggedIn: {loggedInStatus}</p>
    </div>
  );
};
