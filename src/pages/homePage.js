import React from 'react';
import { signOut } from '../services/auth.services';

const HomePage = () => {
  return (
    <div className='flex space-x-10 justify-center'>
      <p>Hello World</p>
      <button onClick={signOut}>Logout</button>
    </div>
  );
};

export default HomePage;
