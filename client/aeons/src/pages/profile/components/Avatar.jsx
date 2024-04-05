import React, { useState, useEffect, useRef } from 'react';
import Input from '../../../components/Input';
import { useForm } from 'react-hook-form';
import { Icon } from '@iconify/react';

const Avatar = ({ setNextStep }) => {
    const inputRef = useRef();
    const { register, handleSubmit } = useForm();
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState(true)

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        setSelectedFile(e.target.files[0])
    }

    const openImage = () => {
        inputRef.current.click()
    }

    const onSubmit = (e) => {
        // e.stopPropagation(); // Stop event propagation
        setNextStep(true)
    }


    return (
        <div className="div">
            <form className='' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-xl font-bold'>Add an Avatar</h1>
                <div className="flex flex-row gap-8 mt-4">
                    <div className="">
                        <div className={`w-36 h-36 rounded-full ${preview ? " " : "border-dashed border-2"}  flex justify-center items-center overflow-hidden`}>
                            {preview ? (
                                <img src={preview} alt="Avatar" className="object-cover w-full h-full" />
                            ) : (
                                <Icon icon="ph:camera-plus-thin" className='h-8 w-8' onClick={openImage} />
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        <button className=" text-gray-600 border-[1px] font-bold py-2 px-4 h-10 w-36 text-sm rounded-md " onClick={openImage}>
                            Choose Image
                            <input type="file" onChange={onSelectFile} ref={inputRef} className='hidden' />
                        </button>
                        <p className='flex flex-row gap-1 items-center text-sm'><Icon icon="ep:arrow-right" />Or choose from default colors</p>
                    </div>
                </div>
                <h2 className='text-xl font-bold mt-16 mb-4'>Add your location</h2>
                <Input
                    // label='Location'
                    // placeholder='Enter your location'
                    name='location'
                    register={register}
                />
                <div className="flex flex-col justify-start mt-16 gap-2">
                    <button onClick={onSubmit} className="bg-pink-600  text-white font-bold py-2 px-4 h-10 w-48 text-sm rounded-md " >
                        Next
                    </button>
                    <p className='text-gray-600 text-sm ml-10 font-semibold'>or Press RETURN</p>

                </div>
            </form>
        </div>
    );
};

export default Avatar;
