import React, { useState } from 'react'
import Reference from './Reference';
import Experience from './Experience';

const Languages = () => {
    const [showReference, setShowReference] = useState(false);
    const [showPrev, setShowLanguage] = useState(false);

    const onEducationHandler = () => {
        setShowReference(true);
    };

    const onPrevHandler = () => {
        setShowLanguage(true);
    };

    if (showPrev) {
        return <Experience />;
    }

    if (showReference) {
        return <Reference />;
    }

  return (
    <>
        <fieldset className="px-8 text-left">
            <div className="mb-6">
                <div className="mb-6 text-left">
                <h2 className="text-xl text-slate-900">Languages *</h2>
                </div>
                <div className="con-language mb-5 gap-4 space-y-6">
                {/* Language Name & Level */}
                <div className="flex justify-between gap-4">
                    <div className="w-1/2">
                    <label className="text-m mb-2 block text-left text-black">Language</label>
                    <input
                        type="text"
                        name="language"
                        placeholder="Name"
                        className="l-language w-full rounded-md border border-blue-200 bg-white px-4 py-2 text-gray-500 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                    />
                    </div>
                    <div className="w-1/2">
                    <div className="flex justify-between">
                        <label className="text-m mb-2 flex items-center text-left text-black">Level</label>
                        <div className="btn-r-language"></div>
                    </div>
                    <select className="l-description w-full rounded-md border border-blue-200 bg-white px-4 py-2 text-gray-500 placeholder-gray-400 focus:border-blue-300 focus:outline-none">
                        <option value="l">Low</option>
                        <option value="m">Medium</option>
                        <option value="g">Good</option>
                        <option value="e">Excellent</option>
                    </select>
                    </div>
                </div>
                </div>

                {/* Add Another Field Button */}
                <div className="mt-3">
                <button type="button" id="btn-add-language" className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM8 12h8M12 16V8"
                        stroke="#4989ff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                    </svg>
                    <p className="text-gray-500 ml-2">Add another field</p>
                </button>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-10 mb-5 flex justify-end gap-2">
                <button
                type="button"
                name="previous"
                className="previous cursor-pointer rounded border border-gray-300 px-6 py-2 text-black transition-colors"
                onClick={onPrevHandler}
                >
                Previous
                </button>
                <button
                type="button"
                name="next"
                className="next cursor-pointer rounded bg-blue-500 px-6 py-2 text-white transition-colors hover:bg-blue-700"
                onClick={onEducationHandler}
                >
                Next
                </button>
            </div>
        </fieldset>
    
    
    
    </>
  )
}

export default Languages