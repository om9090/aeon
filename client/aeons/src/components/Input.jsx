import React from 'react';
import { Icon } from '@iconify/react';

const Input = ({
  type,
  label,
  register,
  placeholder,
  name,
  errors,
  ref
}) => {
  return (
    <div className="">
      <div className="flex flex-row gap-1 items-center">
        {errors ? <Icon icon="jam:triangle-danger-f" className='text-red-500'/> : ""}
        {label && (<label className="block text-gray-700 text-sm font-bold mb-1 space-x-1" htmlFor={placeholder}>{label}</label>)}
      </div>
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="bg-gray-100 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}

export default Input;
