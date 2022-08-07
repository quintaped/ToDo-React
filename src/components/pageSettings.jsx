import React, { createContext, useState, useEffect, useContext } from 'react';

export const PageContext = createContext();

const PageSettings = (props) => {
  const { children } = props;
  const { headerFontSize} = useState('16')
  const {footerFontSize} = useState('12')
  return(
    <PageContext.Settings value={{ headerFontSize, footerFontSize }}>{children}</PageContext.Settings>
  )
  
};

export default PageSettings;

export const useHeaderFontSize = () => useContext(PageContext); 
export const useFooterFontSize = () => useContext(PageContext); 
