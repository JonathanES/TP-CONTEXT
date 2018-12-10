import React from 'react';
import ThemeContext from '../contexts/ThemeContext';
import UserContext from '../contexts/UserContext';
import Button from './Button';


const LoginForm = ({
  userName = '',
  passWord = '',
  onSubmit = (context) => {
    context.state.isLoggedIn = (context.state.username === userName && context.state.password === passWord) ? true : false;
    context.onSubmit(context.state.isLoggedIn);
}, 
handleChange = (event) => {
  switch (event.target.id) {
    case "username":
      userName = event.target.value;
      break;
    case "password":
      passWord = event.target.value;
      break;
    default:
      break;
  }
} }) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <div>
        <div>
          <label htmlFor="username" style={{ color: theme.textColor }}>
            username
          </label>
          <input name="username" id="username" onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="password" style={{ color: theme.textColor }}>
            password
          </label>
          <input name="password" id="password" onChange={handleChange}/>
        </div>
        <UserContext.Consumer>
        { context => (
      <div>
          <Button
          backgroundColor={theme.linkColor}
          textColor={theme.backgroundColor}
          onClick={() => onSubmit(context)}
        >
          login
        </Button>
      </div>
        )}
  </UserContext.Consumer>
      </div>
    )}
  </ThemeContext.Consumer>
);

export default LoginForm;
