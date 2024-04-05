import React, { useEffect, useState } from 'react'
import option from '../../../assets/option1.png'

const OptionCard = ({ index, setSelectedArray, selectedArray, item }) => {
    const [isSelected, setIsSelected] = useState(false)
    const handleClick = () => {
        // if index is present remove it else add it
        setSelectedArray((prev) => {
            if (prev.includes(index)) {
                return prev.filter((item) => item !== index)
            } else {
                return [...prev, index]
            }
        })
    }
    useEffect(() => {
        if (selectedArray.includes(index)) {
            setIsSelected(true)
        }
        else {
            setIsSelected(false)
        }
    }, [selectedArray])

    const handleSelect = (image) => {
    }

    return (
        <div onClick={handleClick} className={`md:h-72 h-[350px] w-full border-[3px] ${isSelected ? "border-pink-600" : ""} rounded-2xl items-center flex flex-col justify-center relative`}>
            <div className={`absolute ${isSelected ? "-top-16" : ""} flex flex-col items-center h-full w-full`}>
                <img src={option} alt="option" className="object-cover h-1/2 w-3/5 rounded-2xl" />
                <h1 className="font-bold text-xl px-4">I'm a designer looking to share my work </h1>
            </div>
            {isSelected ? (
                <div className="px-4 text-sm md:mt-28 mt-20">
                    <p>With over 7 millions shots from vast community of Designers.</p>
                </div>
            ) : ""}
            <div className="absolute md:bottom-4 bottom-8">
                <div class="round">
                    <input type="checkbox" checked={isSelected} id="checkbox" />
                    <label for="checkbox"></label>
                </div>
            </div>
            {/* <input type="checkbox" checked={isSelected} onChange={() => handleSelect(isSelected)} className='bg-pink-600 absolute bottom-8 left-1/2 h-6 w-6 rounded-full' /> */}
        </div>
    )
}

export default OptionCard