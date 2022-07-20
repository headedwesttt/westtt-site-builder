import React from 'react';
import { Link } from 'react-router-dom';

export const Layout = ({ children }) => {
  const user = 'Mike';

  return (
    <div>
      <section>
        <div>
          <img src="" alt="" />
          <h1>Westtt</h1>
        </div>
        <h2>Good Morning, {user}.</h2>
        <nav>
          <div>
            <Link to="/">Dashboard</Link>
            <Link to="/editor">Editor</Link>
            <Link to="/content">Content</Link>
            <Link to="/content">Settings</Link>
          </div>
          <div>
            <Link to="/account">Account</Link>
          </div>
        </nav>
      </section>
      <main>{children}</main>
    </div>
  );
};
