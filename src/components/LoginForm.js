import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../services/auth.services';
import { RouterHelper } from '../helpers/router.helper';
import { Input, CheckBox, Button } from './common';
import { INDIGO, WHITE } from '../constants/colors';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    signIn({ email, password });
  };

  return (
    <div className='mt-20 mb-10 px-4 sm:px-6 lg:px-20 xl:px-24'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <p className='text-4xl my-2 font-sans text-center font-bold'>Log in to your account</p>
      </div>

      <div className='mt-8 py-8 px-4 shadow sm:rounded-lg sm:px-10'>
        <div className='space-y-6'>
          <div>
            <p className='mb-1 text-sm font-bold'>Email address</p>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div>
            <p className='mb-1 text-sm font-bold'>Password</p>
            <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className='flex items-center justify-between'>
            <CheckBox text='Remember me' />

            <p className='text-sm text-blue-500 font-bold cursor-pointer'>Forgot your password?</p>
          </div>

          <div className='h-10'>
            <Button text='Log In' color={INDIGO} textColor={WHITE} onClick={handleSubmit} />
          </div>

          <div className='h-10'>
            <Button text='Sign Up' color={WHITE} onClick={() => navigate(RouterHelper.signupPath())} />
          </div>

          <div className='w-96' />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
