import React, { Component, Suspense } from 'react';
import Button from './components/Button';
import ThemeContext, { themes } from './contexts/ThemeContext';
import UserContext, { username, isLoggedIn, password } from './contexts/UserContext';
import MainLayout from './layouts/MainLayout';
import ImageLoading from './components/ImageLoading';
const UserProfile = React.lazy(() => import('./components/UserProfile'));
const LoginForm = React.lazy(() => import('./components/LoginForm'));

class App extends Component {
  state = {
    theme: themes.dark,
    toggleTheme: this.toggleTheme,
    username: username,
    isLoggedIn: isLoggedIn,
    password: password,
  };
  onSubmit = (isLoggedIn) => {
    this.setState({
      isLoggedIn: isLoggedIn
    })
  }
  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === themes.dark ? themes.blue : themes.dark
    })
  };
  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <UserContext.Provider value={{ state: this.state, onSubmit: this.onSubmit }}>
          <MainLayout>
          <Suspense fallback={<ImageLoading/>}>
              {
                (!this.state.isLoggedIn) ? <LoginForm onSubmit={this.onLogin} /> : <UserProfile onSubmit={this.onLogout} />
              }
            </Suspense>
            <Button top="0" left="0" position="absolute" backgroundColor={this.state.theme.linkColor} onClick={this.toggleTheme}>Change theme</Button>
          </MainLayout>
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export default App;
