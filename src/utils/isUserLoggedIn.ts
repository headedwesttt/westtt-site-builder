import { magic } from './magic';

export const isUserLoggedIn = async () => {
  const isLoggedIn = await magic.user.isLoggedIn();
  // isLoggedIn ? setLoggedInStatus('true') : setLoggedInStatus('false');
  // console.log('loggedInStatus', loggedInStatus);
  console.log('! isLoggedIn', isLoggedIn.toString());
  return isLoggedIn.toString();
};
