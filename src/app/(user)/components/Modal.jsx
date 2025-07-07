'use client'
import React from 'react';
import Link from 'next/link';
import Personal from './Personal';


function Modal({ closeModal }) {
    return (
        <>
                {/* <!-- Pop up modal create CV--> */}
                <div id="popup-cv-modal" className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-5 text-center sm:items-center sm:p-0">
                        <div className="relative w-[650px] transform overflow-hidden rounded-3xl bg-white p-5 text-center shadow-xl transition-all sm:my-8">
                            <div className="rounded-3xl bg-white px-0pb-0">
                                <div className="flex justify-end">
                                    <button className="cursor-pointer" onClick={closeModal}> {/* Close Button */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM9.17 14.83l5.66-5.66M14.83 14.83 9.17 9.17" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </button>                       
                                </div>
                                <h2 id="header" className="text-3xl text-black text-center font-semibold my-5" >Setting Up Your Resume</h2>
                                <p className="text-gray-500 text-center">
                                    Craft multiple tailored CVs easily with this simple multi-form
                                    tool, customizing your skills and experience into polished
                                    resumes for companies or school contacts.
                                </p>                   
                                <form id="cvForm" className="relative mt-10">
                                    {/* <!-- Progress Bar --> */}
                                    <ul className="mb-8 flex justify-between px-8" id="progressbar">
                                        {/* <!-- Personal --> */}
                                        <li className="relative flex-1 text-center" id="personal">
                                            <div className="relative z-10 mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M17 21H7c-4 0-5-1-5-5V8c0-4 1-5 5-5h10c4 0 5 1 5 5v8c0 4-1 5-5 5ZM14 8h5M15 12h4M17 16h2" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M8.5 11.29a1.81 1.81 0 1 0 0-3.62 1.81 1.81 0 0 0 0 3.62ZM12 16.33a3.02 3.02 0 0 0-2.74-2.72 7.72 7.72 0 0 0-1.52 0A3.03 3.03 0 0 0 5 16.33" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                            </div>
                                            <span className="text-sm text-blue-500">Personal</span>
                                            <div className="absolute top-6 left-1/2 h-1 w-full bg-gray-200"></div>
                                        </li>
                                        {/* <!-- Trainee --> */}
                                        <li className="relative flex-1 text-center" id="trainee">
                                            <div className="a relative z-10 mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gray-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M22 4.67v12.07c0 .96-.78 1.86-1.74 1.98l-.33.04c-2.18.29-5.54 1.4-7.46 2.46-.26.15-.69.15-.96 0l-.04-.02c-1.92-1.05-5.27-2.15-7.44-2.44l-.29-.04C2.78 18.6 2 17.7 2 16.74V4.66c0-1.19.97-2.09 2.16-1.99 2.1.17 5.28 1.23 7.06 2.34l.25.15c.29.18.77.18 1.06 0l.17-.11c.63-.39 1.43-.78 2.3-1.13V8l2-1.33L19 8V2.78c.27-.05.53-.08.77-.1h.06c1.19-.1 2.17.79 2.17 1.99ZM12 5.49v15" stroke="#d9e3f0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M19 2.78V8l-2-1.33L15 8V3.92c1.31-.52 2.77-.94 4-1.14Z" stroke="#d9e3f0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                            </div>
                                            <span className="text-sm text-gray-500">Trainee</span>
                                            <div className="absolute top-6 left-1/2 h-1 w-full bg-gray-200"></div>
                                        </li>
                                        {/* <!-- Education --> */}
                                        <li className="relative flex-1 text-center" id="education">
                                            <div className="a relative z-10 mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gray-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M2 22h20M12 2c1.6.64 3.4.64 5 0v3c-1.6.64-3.4.64-5 0V2ZM12 5v3M17 8H7c-2 0-3 1-3 3v11h16V11c0-2-1-3-3-3ZM4.58 12h14.84" stroke="#d9e3f0" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M7.99 12v10M11.99 12v10M15.99 12v10" stroke="#d9e3f0" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"></path>
                                            </svg>
                                            </div>
                                            <span className="text-sm text-gray-500">Education</span>
                                            <div className="absolute top-6 left-1/2 h-1 w-full bg-gray-200"></div>
                                        </li>
                                        {/* <!-- experience --> */}
                                        <li className="relative flex-1 text-center" id="experience">
                                            <div className="a relative z-10 mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gray-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 18.2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="#d9e3f0" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="m10.44 14.3.65.65c.19.19.5.19.69.01l1.78-1.64" stroke="#d9e3f0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M8 22h8c4.02 0 4.74-1.61 4.95-3.57l.75-8C21.97 7.99 21.27 6 17 6H7c-4.27 0-4.97 1.99-4.7 4.43l.75 8C3.26 20.39 3.98 22 8 22ZM8 6v-.8C8 3.43 8 2 11.2 2h1.6C16 2 16 3.43 16 5.2V6" stroke="#d9e3f0" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M21.65 11a16.335 16.335 0 0 1-5.64 2.64M2.62 11.27c1.67 1.14 3.49 1.95 5.38 2.41" stroke="#d9e3f0" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                            </div>
                                            <span className="text-sm text-gray-500">Experience</span>
                                            <div className="absolute top-6 left-1/2 h-1 w-full bg-gray-200"></div>
                                        </li>
                                        {/* <!-- language --> */}
                                        <li className="relative flex-1 text-center" id="language">
                                            <div className="a relative z-10 mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gray-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M16.99 8.96H7.01M12 7.28v1.68M14.5 8.94c0 4.3-3.36 7.78-7.5 7.78" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M17 16.72c-1.8 0-3.4-.96-4.55-2.47" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                            </div>
                                            <span className="text-sm text-gray-500">Language</span>
                                            <div className="absolute top-6 left-1/2 h-1 w-full bg-gray-200"></div>
                                        </li>
                                        {/* <!-- reference --> */}
                                        <li className="relative flex-1 text-center" id="reference">
                                            <div className="a relative z-10 mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-gray-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M9.16 10.87c-.1-.01-.22-.01-.33 0a4.42 4.42 0 0 1-4.27-4.43C4.56 3.99 6.54 2 9 2a4.435 4.435 0 0 1 .16 8.87ZM16.41 4c1.94 0 3.5 1.57 3.5 3.5 0 1.89-1.5 3.43-3.37 3.5a1.13 1.13 0 0 0-.26 0M4.16 14.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26 1.84 10.01 0 2.42-1.62 2.42-4.26 0-5.87-2.74-1.83-7.25-1.83-10.01 0ZM18.34 20c.72-.15 1.4-.44 1.96-.87 1.56-1.17 1.56-3.1 0-4.27-.55-.42-1.22-.7-1.93-.86" stroke="#d9e3f0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                            </div>
                                            <span className="text-sm text-gray-500">Reference</span>
                                        </li>
                                    </ul>
                                    <Personal/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
        </>
    );
}
export default Modal;
