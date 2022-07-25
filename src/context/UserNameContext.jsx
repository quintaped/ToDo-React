import React, { createContext, useState, useEffect, useContext } from 'react';

export const UserContext = createContext();

const UserProvider = (props) => {
  const { children } = props;
  const [userName, setUserName]= useState ('');
  useEffect(() => {
    const localUserName = localStorage.getItem('userName') || 'Anonymous';
    setUserName(localUserName);
  }, []); // call function only one time at start app
  // order make sense
  useEffect(() => {
    localStorage.setItem('userName', userName);
  }, [userName]);
  return <UserContext.Provider value={{ userName, setUserName }}>{children}</UserContext.Provider>
};

export default UserProvider;

export const useUserName = () => useContext(UserContext);