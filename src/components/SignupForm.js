import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../services/auth.services';
import { RouterHelper } from '../helpers/router.helper';
import { Input, CheckBox, Button } from './common';
import { INDIGO, WHITE } from '../constants/colors';

const SignupForm = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    password: '',
  });

  const handleUserData = (e) => {
    const { name, value } = e.target;

    setUserData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    signUp(userData);
  };

  return (
    <div className='mt-20 mb-10 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <p className='text-4xl my-2 font-sans text-center font-bold'>Create a new account</p>
      </div>

      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <div className='space-y-2'>
            <div>
              <p className='mb-1 text-sm font-bold'>Name</p>
              <Input name='name' onChange={handleUserData} />
            </div>

            <div>
              <h2 className='mb-1 text-sm font-bold'>Email</h2>
              <Input name='email' onChange={handleUserData} />
            </div>

            <div>
              <h2 className='mb-1 text-sm font-bold'>Age</h2>
              <Input type='number' name='age' onChange={handleUserData} />
            </div>

            <div>
              <h2 className='mb-1 text-sm font-bold'>Gender</h2>
              <select
                className='w-full h-10 text-center bg-white shadow-md rounded-md focus:outline-none'
                name='gender'
                onChange={handleUserData}
              >
                <option value=''>
                  Select gender...
                </option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='others'>Others</option>
              </select>
            </div>

            <div>
              <h2 className='mb-1 text-sm font-bold'>Password</h2>
              <Input type='password' name='password' onChange={handleUserData} />
            </div>

            <div className='py-2'>
              <div className='flex items-center justify-between'>
                <CheckBox text='I agree to the Terms and Conditions' />

                <p style={{ color: INDIGO }} className={`text-sm font-bold cursor-pointer`}>
                  Read
                </p>
              </div>

              <div className='flex items-center justify-between'>
                <CheckBox text='I agree to the Cookie Policy' />

                <p style={{ color: INDIGO }} className={`text-sm font-bold cursor-pointer`}>
                  Read
                </p>
              </div>
            </div>

            <div className='h-10'>
              <Button text='Sign Up' color={INDIGO} textColor={WHITE} onClick={handleSubmit} />
            </div>

            <div className='h-10'>
              <Button text='Log In' color={WHITE} onClick={() => navigate(RouterHelper.loginPath())} />
            </div>

            <div className='w-96' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
