'use client';
import React from 'react';
import { Menu } from '@headlessui/react';

const userData = [
    { id: 1, title: "Resume", describe: "For Developer"    , date: "2025-03-10 04:30:56.673" },
    { id: 2, title: "Resume", describe: "For Developer"    , date: "2025-03-10 04:30:56.673" },
    { id: 3, title: "Resume", describe: "For Developer"    , date: "2025-03-10 04:30:56.673" },
    { id: 4, title: "Resume", describe: "For Developer"    , date: "2025-03-10 04:30:56.673" },
    { id: 5, title: "Resume", describe: "For Developer"    , date: "2025-03-10 04:30:56.673" },

];

const DropdownMenu = () => (
  <Menu as="div" className="relative inline-block text-left">
    <Menu.Button className="cursor-pointer p-1 rounded-full hover:bg-gray-100">
      {/* Use the existing icon */}
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M17.54 8.31a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92ZM6.46 8.31a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92ZM17.54 20.61a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92ZM6.46 20.61a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92Z" stroke="#292d32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Menu.Button>

    <Menu.Items className="cursor-pointer w-25 absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-gray ring-opacity-5 z-10 ">
      <div className="py-1">
        {['Update CV', 'Delete CV'].map((item) => (
          <Menu.Item key={item}>
            {({ active }) => (
              <button
                onClick={() => alert(`${item} clicked`)}
                className={`${
                  active ? 'cursor-pointer bg-gray-100' : ''
                } w-full px-4 py-2 text-sm text-left text-gray-700`}
              >
                {item}
              </button>
            )}
          </Menu.Item>
        ))}
      </div>
    </Menu.Items>
  </Menu>
);

const UserCard = ({ id,title, describe, date }) => (
  <div className="bg-white p-4 rounded-lg border-2 bg-green-500 border-gray-300 shadow-sm relative​">
    <div className="flex justify-between items-start">
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M18.14 21.62c-.88.26-1.92.38-3.14.38H9c-1.22 0-2.26-.12-3.14-.38.22-2.6 2.89-4.65 6.14-4.65 3.25 0 5.92 2.05 6.14 4.65Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 2H9C4 2 2 4 2 9v6c0 3.78 1.14 5.85 3.86 6.62.22-2.6 2.89-4.65 6.14-4.65 3.25 0 5.92 2.05 6.14 4.65C20.86 20.85 22 18.78 22 15V9c0-5-2-7-7-7Zm-3 12.17c-1.98 0-3.58-1.61-3.58-3.59C8.42 8.6 10.02 7 12 7s3.58 1.6 3.58 3.58-1.6 3.59-3.58 3.59Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <DropdownMenu />
    </div>
    <div className="mt-3">
      <h3 className="font-semibold text-2xl">{`${title}#${id}`}</h3>
      <p className="text-sm text-gray-600">{describe}</p>
      <p className="text-sm text-gray-600">{date}</p>
    </div>
  </div>
);

const Cards = () => (
  <>
    {userData.map(user => (
      <UserCard key={user.id} {...user} />
    ))}
  </>
);

export default Cards;

