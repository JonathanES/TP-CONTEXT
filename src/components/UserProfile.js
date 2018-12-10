import React from 'react';
import UserContext from '../contexts/UserContext';
import ThemeContext from '../contexts/ThemeContext';

 const User = () => (
  <ThemeContext.Consumer>
  {({ theme }) => (
  <UserContext.Consumer>
    {context => (
      <div>
        {context.state.username}
      </div>
    )}
  </UserContext.Consumer>
  )}
  </ThemeContext.Consumer>
);

export default User;
