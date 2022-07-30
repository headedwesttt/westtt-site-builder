import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { magic } from '../../utils/magic';
import logo from '../../logo.svg';

export const Layout = () => {
  useEffect(() => {
    const DID = magic.auth.loginWithCredential();
  }, []);

  const user = 'Mike';

  return (
    <div className="layout">
      <section className="layout_side">
        <div className="branding">
          <img src={logo} alt="" />
          <h1>Westtt</h1>
        </div>
        <h2 className="greeting">Good Morning, {user}.</h2>
        <nav className="nav">
          <div>
            <Link to="/">Dashboard</Link>
            <Link to="editor">Editor</Link>
            <Link to="content">Content</Link>
            <Link to="settings">Settings</Link>
          </div>
          <Link to="account">Account</Link>
        </nav>
      </section>
      <main className="layout_content">
        <Outlet />
      </main>
    </div>
  );
};
