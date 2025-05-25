import React from 'react'
import { useState } from 'react';
import Education from './Education';

const Trainee = () => {
    const [showEducation, setShowEducation] = useState(false);
    const onEducationHandler = () => {
        setShowEducation(true);
    }
  return (
    <>
         {/* <!-- Trainee Information Fieldset --> */}
        <fieldset className="px-8 text-left">
            <div className="mb-6">
            <div className="mb-6 text-left">
                <h2 className="text-xl text-slate-900">Trainee Information *</h2>
            </div>
            <div className="con-trainee mb-5 gap-4 space-y-6">
                {/* <!-- Course Name and Hour Per Day --> */}
                <div className="flex justify-between gap-4">
                <div className="w-1/2">
                    <label className="text-m mb-2 block text-left text-black">Course Name</label>
                    <input type="text" name="t-name" placeholder="Name" className="t-name w-full rounded-md border border-blue-200 bg-white px-4 py-2 text-gray-500 placeholder-gray-400 focus:border-blue-300 focus:outline-none" />
                </div>
                <div className="w-1/2">
                    <div className="flex justify-between">
                    <label className="text-m mb-2 flex items-center text-left text-black">Center</label>
                    <div className="btn-r-trainee"></div>
                    {/* <!-- Placeholder for remove button --> */}
                    </div>
                    <input type="text" name="t-center" placeholder="Name" className="t-center w-full rounded-md border border-blue-200 bg-white px-4 py-2 text-gray-500 placeholder-gray-400 focus:border-blue-300 focus:outline-none" />
                </div>
                </div>

                {/* <!-- Start Date and End Date --> */}
                <div className="mt-5 flex justify-between gap-4">
                <div className="w-1/2">
                    <label className="text-m mb-2 block text-left text-black">Start Date</label>
                    <input type="date" name="t-sdate" placeholder="Date" className="t-sdate w-full rounded-md border border-blue-200 bg-white px-4 py-2 text-gray-500 placeholder-gray-400 focus:border-blue-300 focus:outline-none" />
                </div>
                <div className="w-1/2">
                    <label className="text-m mb-2 block text-left text-black">End Date</label>
                    <input type="date" name="endDate" placeholder="Date" className="t-edate w-full rounded-md border border-blue-200 bg-white px-4 py-2 text-gray-500 placeholder-gray-400 focus:border-blue-300 focus:outline-none" />
                </div>
                </div>
            </div>
            {/* <!-- Add Another Field Button --> */}
            <div className="mt-3">
                <button type="button" id="btn-add-trainee" className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM8 12h8M12 16V8" stroke="#4989ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <p className="text-gray-500">Add another field</p>
                </button>
            </div>
            </div>

            <div className="mt-10 mb-5 flex justify-end gap-2">
            <button type="button" name="previous" className="previous cursor-pointer rounded border border-gray-300 px-6 py-2 text-black">Previous</button>
            <button type="button" name="next" className="next cursor-pointer rounded bg-blue-500 px-6 py-2 text-white transition-colors hover:bg-blue-700" onClick={onEducationHandler}>Next</button>
            </div>
        </fieldset>

    </>
  )
}

export default Trainee
