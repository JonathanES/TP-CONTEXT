import React from 'react';
import ThemeContext from '../contexts/ThemeContext';

const MainLayout = ({ children }) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <div
        style={{
          backgroundColor: theme.backgroundColor,
          textAlign: 'center',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 'calc(10px + 2vmin)'
        }}
      >
        {children}
      </div>
    )}
  </ThemeContext.Consumer>
);

export default MainLayout;
