import React, { useContext } from 'react';
import { ThemeContext } from './TestUserContext';
const ContentContext = () => {
  const theme = useContext(ThemeContext);
  return <div>theme :{theme}</div>;
};

export default ContentContext;
