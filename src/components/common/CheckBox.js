import React from 'react';

const CheckBox = ({ text, checked, onChange }) => {
  return (
    <label className="my-1 flex items-center">
      <input
        type='checkbox'
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
      />
      <p className="text-black text-sm font-bold ml-2">{text}</p>
    </label>
  );
};

export default CheckBox;
