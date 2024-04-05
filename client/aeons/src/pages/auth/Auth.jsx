import React, { useState } from 'react';
import photo from '../../assets/home.png';
import Form from './components/Form';
import LoginForm from './components/LoginForm';

const Auth = () => {
    const [form, setForm] = useState(true);
    return (
        <div className="div">

            <div className='grid md:grid-cols-5 grid-cols-1 h-screen' >
                <div div className="md:col-span-2 md:block hidden" >
                    <img src={photo} alt="home" className="w-full h-full object-cover" />
                </div >
                <div className="md:col-span-3">
                    <div className="md:p-6 p-2 flex flex-row gap-1 justify-end">
                        <h3 className=''>Already a member?</h3>
                        <h3 className='text-blue-600' style={{ textDecoration: 'underline' }} onClick={() => setForm(!form)}>{form ? "Sign Up" : "Sign In"}</h3>
                    </div>
                    <div className="md:px-56 px-4 py-6 space-y-8">
                        <h1 className='text-3xl font-bold'>{!form ? "Sign Up" : "Sign In"} to Dribble</h1>
                        {form ? <Form /> : <LoginForm />}
                        {form ? <p className="text-xs mt-1 text-gray-700 pr-40">
                            This site is protected by reCAPTCHA and the Google <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a> and <a href="#" className="text-blue-500 hover:underline">Terms and Services</a>
                        </p> : ""}
                    </div>
                </div>
            </div >
        </div >

    );
}

export default Auth;
