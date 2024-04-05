import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import Search from '../Search'
import logo from '../../assets/logo1.png'
const Header = () => {
    const [loggedIn, setLoggedIn] = useState(true)
    return (
        <header className="fixed flex flex-row top-0 w-full bg-white border-b-[1px] z-10">
            <div className="container items-center !px-4 flex flex-row gap-6">

                <div className="h-20 w-20">
                    <img src={logo} alt="logo" className="object-contain " />
                </div>
                <div className=" flex flex-row justify-between items-center w-full">
                    <div className="flex items-center gap-6 text-gray-700">
                        {/* <Icon icon="material-symbols:wifi" className="w-8 h-8 text-blue-500" /> */}
                        <Link to="/" className="font-bold text-sm text-gray-500">Inspiration</Link>
                        <Link to="/" className="font-bold text-sm text-gray-500">Find Work</Link>
                        <Link to="/" className="font-bold text-sm text-gray-500">Learn Design</Link>
                        <Link to="/" className="font-bold text-sm text-gray-500">Go Pro</Link>
                        <Link to="/" className="font-bold text-sm text-gray-500">Hire Designers</Link>
                    </div>
                    <nav className="flex gap-4 text-lg font-semibold items-center">
                        {loggedIn ? (
                            <div className="w-36">
                                <Search />
                            </div>
                        ) : ""}
                        <Icon icon="ph:briefcase-light" className='w-6 h-6'/>
                        <img src={logo} alt="logo" className="w-8 h-8 rounded-full" />
                        <button className="bg-pink-500 text-white text-xs py-2 px-3 rounded-lg">Upload</button>
                        
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header