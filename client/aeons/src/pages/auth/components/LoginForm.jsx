import React from 'react'
import Input from '../../../components/Input'
import { useForm } from 'react-hook-form'
import { loginSchema } from '../../../utils/validationSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { Icon } from '@iconify/react';
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    })
    const onSubmit = (data) => {
        // post user data using api
        console.log(data, "data")
        navigate('/')
    }
    return (
        <div>
            <form className='space-y-8' onSubmit={handleSubmit(onSubmit)} >
                <div className="div">
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
                <button type='submit' className="bg-pink-500 text-white py-2 px-4 rounded-md w-1/2">Login</button>
            </form>
        </div>
    )
}

export default LoginForm