'use client'
import React from 'react'
import Link from "next/link";
import { useState } from 'react';
import Trainee from './Trainee';

const Personal = () => {
  const [showTrainee, setShowTrainee] = useState(false);

  const OnPersonalHandler = () => {
    setShowTrainee(true);
  }

  if (showTrainee) {
    return <Trainee />;
  }
  return (
    <>
        <fieldset className="px-8 text-left">
            <div className="mb-6">
              <div className="mb-6">
                <h2 className="text-xl text-slate-900">Personal Data *</h2>
              </div>
              <div className="space-y-4">

                {/* Name and Phone */}
                <div className="flex justify-between gap-4">
                  <div className="w-1/2">
                    <label className="text-m mb-2 block text-left text-black">Name</label>
                    <input
                      id="p-name"
                      type="text"
                      name="p-name"
                      placeholder="Name"
                      required
                      autoComplete="off"
                      className="w-full rounded-md border border-blue-200 bg-white px-4 py-2 text-gray-500 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="text-m mb-2 block text-left text-black">Phone</label>
                    <input
                      id="p-phone"
                      type="tel"
                      name="p-phone"
                      placeholder="Number"
                      required
                      autoComplete="off"
                      className="w-full rounded-md border border-blue-200 bg-white px-4 py-2 text-gray-500 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Email and Gender */}
                <div className="flex justify-between gap-4">
                  <div className="w-1/2">
                    <label className="text-m mb-2 block text-left text-black">Email</label>
                    <input
                      id="p-email"
                      type="email"
                      name="p-email"
                      placeholder="Email"
                      required
                      autoComplete="off"
                      className="w-full rounded-md border border-blue-200 bg-white px-4 py-2 text-gray-500 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="text-m mb-2 block text-left text-black">Gender</label>
                    <select
                      id="p-gender"
                      className="p-gender w-full rounded-md border border-blue-200 bg-white px-4 py-2 text-gray-500 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                    >
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                    </select>
                  </div>
                </div>

                {/* Marital Status and Health */}
                <div className="flex justify-between gap-4">
                  <div className="w-1/2">
                    <label className="text-m mb-2 block text-left text-black">Marital Status</label>
                    <select
                      id="p-status"
                      className="w-full rounded-md border border-blue-200 bg-white px-4 py-2 text-gray-500 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                    >
                      <option value="s">Single</option>
                      <option value="m">Married</option>
                    </select>
                  </div>
                  <div className="w-1/2">
                    <label className="text-m mb-2 block text-left text-black">Health Situation</label>
                    <select
                      id="p-health"
                      className="w-full rounded-md border border-blue-200 bg-white px-4 py-2 text-gray-500 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                    >
                      <option value="e">Excellent</option>
                      <option value="g">Good</option>
                      <option value="p">Poor</option>
                    </select>
                  </div>
                </div>

                {/* Nationality and DOB */}
                <div className="flex justify-between gap-4">
                  <div className="w-1/2">
                    <label className="text-m mb-2 block text-left text-black">Nationality</label>
                    <input
                      id="p-nation"
                      type="text"
                      name="nationality"
                      placeholder="Nationality"
                      autoComplete="off"
                      className="w-full rounded-md border border-blue-200 bg-white px-4 py-2 text-gray-500 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="text-m mb-2 block text-left text-black">Date of Birth</label>
                    <input
                      id="p-dob"
                      type="date"
                      name="dob"
                      required
                      autoComplete="off"
                      className="w-full rounded-md border border-blue-200 bg-white px-4 py-2 text-gray-500 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="col-span-full">
                  <label className="text-m mb-2 block text-left text-black">Address</label>
                  <input
                    id="p-address"
                    type="text"
                    name="address"
                    placeholder="Address"
                    required
                    autoComplete="off"
                    className="w-full rounded-md border border-blue-200 bg-white px-4 py-2 text-gray-500 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                  />
                </div>

                {/* Place of Birth */}
                <div className="col-span-full">
                  <label className="text-m mb-2 block text-left text-black">Place of Birth</label>
                  <input
                    id="p-pob"
                    type="text"
                    name="pob"
                    placeholder="Place Of Birth"
                    required
                    autoComplete="off"
                    className="w-full rounded-md border border-blue-200 bg-white px-4 py-2 text-gray-500 placeholder-gray-400 focus:border-blue-300 focus:outline-none"
                  />
                </div>

              </div>
            </div>

            {/* Navigation */}
            <div className="my-5 flex justify-end gap-2">
              <button
                type="button"
                name="next"
                className="next cursor-pointer rounded bg-blue-500 px-6 py-2 text-white transition-colors hover:bg-blue-700"
                onClick={OnPersonalHandler}
              >
                Next
              </button>
            </div>
        </fieldset>
    </>
  )
}

export default Personal
