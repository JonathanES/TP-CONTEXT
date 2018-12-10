import React from 'react';

export const username = "toto";
export const password = "pwd";
export const isLoggedIn = false;

const UserContext = React.createContext({
     username: username, 
     isLoggedIn: isLoggedIn,
     password: password,
     onSubmit: () => {}
});
  
  export default UserContext;