import React, { useEffect, useState } from 'react';
import { magic } from '../../utils/magic';

export const Account = () => {
  const [newEmail, setNewEmail] = useState('');

  let email = 'broken';
  useEffect(() => {
    const isUserLoggedIn = async () => {
      console.log(await magic.user.isLoggedIn());
    };
    isUserLoggedIn();

    const fetchEmail = async () => {
      try {
        const userData = await magic.user.getMetadata();
        console.log('userData.email', userData.email);
        if (userData.email) email = userData.email;
      } catch (err: any) {
        console.error('magic error', err.message);
      }
    };

    fetchEmail();
    console.log('email ue after call', email);
  }, []);
  console.log('email out', email);

  const handleUpdateEmail = async () => {
    console.log('handleUpdateEmail fn reached');
    // call magic to update email
    await magic.user.updateEmail({ email: newEmail });
    setNewEmail('');
  };

  const handleLogOut = async () => {
    console.log('handleLogOut fn reached');
    try {
      await magic.user.logout();
      // need to redirect user after logout
    } catch (error: any) {
      console.error('handleLogOut', error.message);
    }
  };

  return (
    <div>
      <h2>Account</h2>
      <form>
        <h3>Update Email</h3>
        <label htmlFor="currentEmail">Current Email:</label>
        <input type="text" id="currentEmail" name="currentEmail" value={email} readOnly />
        <label htmlFor="newEmail">New Email:</label>
        <input
          type="text"
          id="newEmail"
          name="newEmail"
          value={newEmail}
          placeholder="email@email.com"
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <button type="submit" onClick={handleUpdateEmail}>
          Update Email
        </button>
        <h3>Update Email</h3>
        <button type="submit" onClick={handleLogOut}>
          Log Out
        </button>
      </form>
    </div>
  );
};
