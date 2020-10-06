import React, { createContext, FC, useState } from 'react';
import { getUserData } from '../../api';

export const UserContext = createContext<any>({});

export const UserProvider: FC = ({ children }) => {
  const [username, setUsername] = useState('Luiz');

  const changeName = () => setUsername('Changed!');

  const changeNameByAPI = async () => {
    setUsername('Loading...');
    const name = await getUserData();
    setUsername(name);
  };

  return <UserContext.Provider value={{ username, changeName, changeNameByAPI }}>{children}</UserContext.Provider>;
};
