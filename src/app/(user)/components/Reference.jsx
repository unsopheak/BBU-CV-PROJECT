import React, { useState } from 'react'
import Languages from './Languages';

const Reference = () => {

    const [showPrev, setShowLanguage] = useState(false);

    const onPrevHandler = () => {
        setShowLanguage(true);
    };

    if (showPrev) {
        return <Languages />;
    }
  return (
    <>
        <fieldset className="px-8 text-left">
            <div className="mb-6 text-left">
                <h2 className="text-xl text-slate-900">Reference *</h2>
            </div>

            <div className="con-reference mb-5 gap-4 space-y-6">
                {/* Name and Phone Number */}
                <div className="flex justify-between gap-4">
                <div className="w-1/2">
                    <label className="text-m mb-2 block text-left text-black">Name</label>
                    <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="r-name w-full rounded-md border border-blue-200 bg-white px-4 py-2 text-gray-500 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                    />
                </div>
                <div className="w-1/2">
                    <div className="mb-2 flex justify-between">
                    <label className="text-m flex items-center text-left text-black">Phone Number</label>
                    <div className="btn-r-reference" />
                    </div>
                    <input
                    type="text"
                    name="phone"
                    placeholder="Number"
                    className="r-phone w-full rounded-md border border-blue-200 bg-white px-4 py-2 text-gray-500 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                    />
                </div>
                </div>

                {/* Email and Position */}
                <div className="mt-5 flex justify-between gap-4">
                <div className="w-1/2">
                    <label className="text-m mb-2 block text-left text-black">Email</label>
                    <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="r-email w-full rounded-md border border-blue-200 bg-white px-4 py-2 text-gray-500 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                    />
                </div>
                <div className="w-1/2">
                    <label className="text-m mb-2 block text-left text-black">Position</label>
                    <input
                    type="text"
                    name="position"
                    placeholder="Position"
                    className="r-position w-full rounded-md border border-blue-200 bg-white px-4 py-2 text-gray-500 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                    />
                </div>
                </div>
            </div>

            {/* Add Another Reference Button */}
            <div className="mt-3">
                <button type="button" id="btn-add-reference" className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                    d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM8 12h8M12 16V8"
                    stroke="#4989ff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    />
                </svg>
                <p className="text-gray-500 ml-2">Add another field</p>
                </button>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-10 mb-5 flex justify-end gap-2">
                <button
                type="button"
                name="previous"
                className="previous cursor-pointer rounded border border-gray-300 px-6 py-2 text-black"
                onClick={onPrevHandler}
                >
                Previous
                </button>
                <button
                type="submit"
                name="next"
                className="next cursor-pointer rounded bg-blue-500 px-6 py-2 text-white transition-colors hover:bg-blue-700"
                >
                Create
                </button>
            </div>
        </fieldset>
    
    
    </>
  )
}

export default Reference