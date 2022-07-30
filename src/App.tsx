import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MagicUserMetadata } from 'magic-sdk';
import { Account, Content, Dashboard, Editor, Layout, Login, ProtectedRoute, Settings } from './components';
import { magic } from './utils/magic';
import { UserContext } from './UserContext';

export const App = () => {
  const [user, setUser] = useState<MagicUserMetadata | { loading: true } | { user: null }>();

  useEffect(() => {
    setUser({ loading: true });

    const check = async () => {
      const isLoggedIn = await magic.user.isLoggedIn();
      console.log('App - isLoggedIn:', isLoggedIn);
      if (isLoggedIn) {
        const userMetadata = await magic.user.getMetadata();
        console.log('App - userMetaData:', userMetadata);
        setUser(userMetadata);
        console.log('App - user:', user);
      } else setUser({ user: null });
    };
    check();
  }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={[user, setUser]}>
        <Routes>
          {/* All child Routes of Layout are protected */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="account" element={<Account />} />
            <Route path="content" element={<Content />} />
            <Route path="editor" element={<Editor />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<p>404 page not found, love Westtt</p>} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
};
