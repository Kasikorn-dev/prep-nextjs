import React from 'react';
import { createContext } from 'react';
import ContentContext from './ContentContext';

export const ThemeContext = createContext('light');

const TestUserContext = () => {
  return (
    <ThemeContext.Provider value="dark">
      <ContentContext />
    </ThemeContext.Provider>
  );
};

export default TestUserContext;
