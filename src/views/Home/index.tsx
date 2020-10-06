import React, { useContext } from 'react';
import { TitlePage } from '../../components';
import { UserContext } from '../../stores';

export const Home = () => {
  const { username, changeName, changeNameByAPI } = useContext(UserContext);
  return (
    <div>
      <TitlePage title={username} />
      <button onClick={changeName}>Change Name</button>
      <button onClick={changeNameByAPI}>Change Name For Star Wars Character</button>
    </div>
  );
};
