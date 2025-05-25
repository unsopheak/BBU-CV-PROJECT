'use client'
import React from 'react'
import Link from "next/link";
import { useState } from 'react';
import Trainee from './Trainee';

const Personal = () => {
  const [showTrainee, setShowTrainee] = useState(false);
  const OnPersonalHandle = () => {
    setShowTrainee(true);
  }
  return (
    <>
      {/* Personal Information Fieldset */}
      {!showTrainee && (
        <fieldset className="px-8 text-left">
          <div className="mb-6">
            <h2 className="text-xl text-slate-900">Personal Data *</h2>
          </div>
          <div className="space-y-4">
            {/* Name and Phone */}
            <div className="flex justify-between gap-4">
              <div className="w-1/2">
                <label className="text-m mb-2 block text-left text-black">Name</label>
                <input type="text" placeholder="Name" required className="w-full rounded-md border border-blue-200 bg-white px-4 py-2 text-gray-500 placeholder-gray-400 focus:border-blue-300 focus:outline-none" />
              </div>
              <div className="w-1/2">
                <label className="text-m mb-2 block text-left text-black">Phone</label>
                <input type="tel" placeholder="Number" required className="w-full rounded-md border border-blue-200 bg-white px-4 py-2 text-gray-500 placeholder-gray-400 focus:border-blue-300 focus:outline-none" />
              </div>
            </div>

            {/* Email and Gender */}
            <div className="flex justify-between gap-4">
              <div className="w-1/2">
                <label className="text-m mb-2 block text-left text-black">Email</label>
                <input type="email" placeholder="Email" required className="w-full rounded-md border border-blue-200 bg-white px-4 py-2 text-gray-500 placeholder-gray-400 focus:border-blue-300 focus:outline-none" />
              </div>
              <div className="w-1/2">
                <label className="text-m mb-2 block text-left text-black">Gender</label>
                <select className="w-full rounded-md border border-blue-200 bg-white px-4 py-2 text-gray-500 focus:border-blue-300 focus:outline-none">
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
              </div>
            </div>

            {/* Nationality and DOB */}
            <div className="flex justify-between gap-4">
              <div className="w-1/2">
                <label className="text-m mb-2 block text-left text-black">Nationality</label>
                <input type="text" placeholder="Nationality" className="w-full rounded-md border border-blue-200 bg-white px-4 py-2 text-gray-500 focus:border-blue-300 focus:outline-none" />
              </div>
              <div className="w-1/2">
                <label className="text-m mb-2 block text-left text-black">Date of Birth</label>
                <input type="date" placeholder="Date of Birth" required className="w-full rounded-md border border-blue-200 bg-white px-4 py-2 text-gray-500 focus:border-blue-300 focus:outline-none" />
              </div>
            </div>

            {/* Address */}
            <div className="col-span-full">
              <label className="text-m mb-2 block text-left text-black">Address</label>
              <input type="text" placeholder="Address" required className="w-full rounded-md border border-blue-200 bg-white px-4 py-2 text-gray-500 focus:border-blue-300 focus:outline-none" />
            </div>

            {/* Place of Birth */}
            <div className="col-span-full">
              <label className="text-m mb-2 block text-left text-black">Place of Birth</label>
              <input type="text" placeholder="Place Of Birth" required className="w-full rounded-md border border-blue-200 bg-white px-4 py-2 text-gray-500 focus:border-blue-300 focus:outline-none" />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="my-5 flex justify-end gap-2">
            <button type="button" className="cursor-pointer rounded bg-blue-500 px-6 py-2 text-white transition-colors hover:bg-blue-700" onClick={OnPersonalHandle}>
              Next
            </button>
          </div>
        </fieldset>
      )}

      {/* Show Trainee Component after clicking Next */}
      {showTrainee && <Trainee />}
    </>
  )
}

export default Personal
