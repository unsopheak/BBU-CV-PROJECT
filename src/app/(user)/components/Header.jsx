'use client'
import React from 'react'
import { useState } from 'react';
import Modal from './Modal';

const Header = () => {
    const [showSettingUpResume, setShowSettingUpResume] = useState(false);
    const onModalHandler = () => {
        setShowSettingUpResume(true);
    };
    const closeModal = () => {
        setShowSettingUpResume(false);
    };


  return (
    <>
        <header className="bg-white p-4 border-b flex items-center justify-between">
                <div className="w-1/2 flex ml-9 pb-5">
                    <div className="flex pr-5"></div>
                </div>
                <div className="flex items-center space-x-4 pb-5 relative">
                    {/* Notification Button */}
                    <button className="text-gray-600 hover:text-blue-500" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" >
                            <path d="M12.02 2.91c-3.31 0-6 2.69-6 6v2.89c0 .61-.26 1.54-.57 2.06L4.3 15.77c-.71 1.18-.22 2.49 1.08 2.93 4.31 1.44 8.96 1.44 13.27 0 1.21-.4 1.74-1.83 1.08-2.93l-1.15-1.91c-.3-.52-.56-1.45-.56-2.06V8.91c0-3.3-2.7-6-6-6Z" stroke="#292d32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"></path>
                            <path d="M13.87 3.2a6.754 6.754 0 0 0-3.7 0c.29-.74 1.01-1.26 1.85-1.26.84 0 1.56.52 1.85 1.26Z" stroke="#292d32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M15.02 19.06c0 1.65-1.35 3-3 3-.82 0-1.58-.34-2.12-.88a3.01 3.01 0 0 1-.88-2.12" stroke="#292d32" strokeWidth="1.5" strokeMiterlimit="10"></path>
                        </svg>
                     
                            <span className="absolute top-0 right-0 mr-[200px] bg-red-500 text-white text-xs rounded-full px-1"></span>
                       
                    </button>
         
                    <button className="btn-create-cv bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer" onClick={onModalHandler}> Create New CV </button>
                    <div className="relative">
                        {/* <Image src="" alt="user" className="h-8 w-8 rounded-full cursor-pointer"/>
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                                <ul>
                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Account Settings</li>
                                    <Link href="" ><li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li></Link>
                                </ul>
                            </div>
                        )} */}
                    </div>
                </div>
            </header>
            {showSettingUpResume && <Modal closeModal={closeModal} />}
    
    
    
    
    
    </>
  )
}

export default Header
