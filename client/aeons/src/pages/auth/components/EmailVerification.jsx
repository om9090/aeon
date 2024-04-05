import React from 'react'
import {Icon} from '@iconify/react'
const EmailVerification = () => {
    return (
        <div className='container py-24 flex flex-col text-center justify-center gap-6'>
            <h1 className='font-bold text-3xl'>Please verify your email...</h1>
            <p className='text-gray-600'>Please verify your email address. We've sent a confirmation email to:</p>
            <div className="h-36 relative w-full flex justify-center items-center text-center">
                <Icon icon="fluent:mail-unread-28-filled" className='text-gray-300 h-full w-36'/>
                <div className="absolute h-9 w-9 bg-pink-600 rounded-full flex justify-center items-center top-2.5 right-[437px]">
                    <Icon icon="typcn:tick" className='text-white h-10 w-10 p-1'/>
                </div>
            </div>
            <p className='font-bold'>omdesh2003@gmail.com</p>
            <p className='text-gray-600 '>Click the confirmation link in that email to begin using Dribble.</p>
            <div className="flex flex-col px-36">
                <p className='text-gray-600 '>Didn't receive email? Check your Spam folder, it may have been caught by a filter. If you still don't see it, you can <span className='text-pink-600 font-semibold'> resend the confirmation email</span></p>
            </div>
            <p>Wrong email address? <span className='font-semibold text-pink-600'> Change it.</span></p>
        </div>
    )
}

export default EmailVerification