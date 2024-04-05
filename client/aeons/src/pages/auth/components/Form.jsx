import React from 'react'
import Input from '../../../components/Input'
import { useForm } from 'react-hook-form'
import { registerSchema } from '../../../utils/validationSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { Icon } from '@iconify/react';
import { useNavigate } from "react-router-dom";

const Form = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema)
    })
    const onSubmit = (data) => {
        console.log(data, "")
        navigate('/auth/email')
    }
    
    return (
        <div>
            <form className='space-y-8' onSubmit={handleSubmit(onSubmit)} >
                <div className="flex flex-col font-medium">
                    {errors.name && (
                        <p className="flex items-center text-red-500">
                            <Icon icon="mdi:dot" className="text-red-500 mr-1 h-8 w-8" />
                            {errors.name.message}
                        </p>
                    )}
                    {errors.username && (
                        <p className="flex items-center text-red-500">
                            <Icon icon="mdi:dot" className="text-red-500 mr-1 h-8 w-8" />
                            {errors.username.message}
                        </p>
                    )}
                    {errors.email && (
                        <p className="flex items-center text-red-500">
                            <Icon icon="mdi:dot" className="text-red-500 mr-1 h-8 w-8" />
                            {errors.email.message}
                        </p>
                    )}
                    {errors.password && (
                        <p className="flex items-center text-red-500">
                            <Icon icon="mdi:dot" className="text-red-500 mr-1 h-8 w-8" />
                            {errors.password.message}
                        </p>
                    )}
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                    <Input
                        type="text"
                        label={'Name'}
                        register={register}
                        name="name"
                        errors={errors.name}
                    />
                    <Input
                        type="text"
                        label={'Username'}
                        value=""
                        register={register}
                        name="username"
                        errors={errors.username}
                    />
                </div>
                <Input
                    type="email"
                    label={'Email'}
                    register={register}
                    name="email"
                    errors={errors.email}
                />
                <Input
                    placeholder="6+ characters"
                    type="password"
                    label={'Password'}
                    register={register}
                    name="password"
                    errors={errors.password}
                />
                <div className="flex flex-row items-start">
                    <input type="checkbox" className="form-checkbox h-6 w-6 text-pink-500 mt-1" {...register('checked')} onChange={(e) => {}}/>
                    <span className="ml-2 text-sm text-gray-700">
                        Creating an account means you're okay with our <a href="#" className="text-blue-500 hover:underline">Terms and Service</a>, <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>, and our default <a href="#" className="text-blue-500 hover:underline">Notification Settings</a>
                    </span>
                </div>

                <button type='submit' className="bg-pink-500 text-white py-2 px-4 rounded-md w-1/2">Create Account</button>
            </form>
        </div>
    )
}

export default Form
