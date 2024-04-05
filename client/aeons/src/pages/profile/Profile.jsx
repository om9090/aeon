import React, { useState } from 'react'
import Avatar from './components/Avatar'
import OptionCard from './components/OptionCard'
import { Icon } from '@iconify/react'
import logo from '../../assets/logo1.png'

const Profile = () => {
  const [nextStep, setNextStep] = useState(false)
  const [selectedArray, setSelectedArray] = useState([])
  const data = [{
    image: '../../../assets/option1.png',
  },
  {
    image: '/assets/option2.png',
  },
  {
    image: '/assets/option3.png',
  }
  ]

  console.log(selectedArray)
  return (
    <div className='w-full h-screen px-12'>
      <div className="flex flex-row items-center gap-4">
        <img src={logo} alt='logo' className='w-32 h-28' />
        <button className='h-10 w-10 rounded-lg flex justify-center items-center bg-gray-100' onClick={() => setNextStep(false)}>
          <Icon icon="ion:chevron-back" className='h-3 w-3'/>
        </button>
      </div>
      {/* {!nextStep ? ( */}
      <div className={`container space-y-12 ${!nextStep ? "block" : "hidden"}`}>
        <div className="space-y-6">
          <h1 className='text-4xl font-bold'>Welcome! Let's create your profile</h1>
          <p>Let others get to know you better! You can do these later</p>
        </div>
        <Avatar setNextStep={setNextStep} />
      </div>
      {/* ) : ( */}
        <div className={`container  flex flex-col justify-center text-center gap-4 space-y-12 ${!nextStep ? "hidden" : "block"}`}>
          <div className="space-y-6">
            <h1 className='text-4xl font-bold'>What brings you to Dribble?</h1>
            <p>Select the options that describe you the best.Don't worry, you can explore other options later.</p>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-16 md:gap-8">
            {data.map((item, index) => (
              <OptionCard index={index} key={index} setSelectedArray={setSelectedArray} selectedArray={selectedArray} item={item} />
            ))}
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            {selectedArray.length > 0 ? <p>Anything else? You can select multiple</p> : " "}
            <button
              className={`bg-pink-600 text-white w-36 py-2 px-6 rounded-lg ${selectedArray.length > 0 ? "" : "opacity-25"}`}
              disabled={!selectedArray.length > 0}
              onClick={() => { console.log('Finish') }}
            >
              Finish
            </button>

          </div>
        </div>
      {/* )} */}
    </div>
  )
}

export default Profile