import React from 'react';

const Input = ({ type, value, onChange, disabled, ...rest }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
      {...rest}
      className='w-full h-full px-3 py-2.5 border border-gray-300 focus:border-indigo-500 focus:outline-none sm:text-sm rounded-md shadow-sm'
    />
  );
};

export default Input;
