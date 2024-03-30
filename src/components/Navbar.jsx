import {useState} from 'react';
import React from '../assets/react.svg';

function Navbar({dark, setDark}) {
  const nav = [
    {
      url: '#',
      icon: 'dashboard',
      name: 'Dashboard',
    },
    {
      url: '#',
      icon: 'info',
      name: 'About',
    },
  ];

  return (
    <nav className={['py-1.5 flex border-b items-center justify-between px-4', 'dark:border-slate-600'].join(' ')}>
      <a href="/" className="flex h-9 items-center justify-center overflow-hidden">
        <img className="h-full w-auto max-w-[unset]" src={React} alt="React logo" />
      </a>
      <ul className="flex gap-x-4">
        {nav.map((o, i) => (
          <li key={i} className="flex">
            <a href={o.url} className="flex gap-x-1.5">
              <span className="material-icons-outlined !text-[20px]">{o.icon}</span>
              <p className="font-bold">{o.name}</p>
            </a>
          </li>
        ))}
      </ul>
      <button onClick={() => setDark()}>
        <span className="material-icons-outlined">{dark ? 'dark_mode' : 'light_mode'}</span>
      </button>
    </nav>
  );
}

export default Navbar;
