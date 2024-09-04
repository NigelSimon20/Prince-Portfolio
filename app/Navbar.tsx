'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from "../public/images/logo.png";
import React, { useState } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { label: 'About', href: '/' },
        { label: 'Experience', href: '/' },
        { label: 'Expertise', href: '/' },
        { label: 'Contact', href: '/' },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="py-2 px-4 md:py-[60px] h-14 flex items-center justify-between md:justify-between md:px-20">
            <div className="flex items-center">
                <Link href="/" className="text-black hover:text-zinc-500 transition-colors">
                    <Image src={logo} alt="logo" className='hidden md:block w-[100px]' />
                    <span className='block md:hidden text-black'>Prince Ruswa</span>
                </Link>
            </div>

            <div className="md:hidden">
                <button
                    onClick={toggleMenu}
                    className="text-black hover:text-black focus:outline-none"
                >
                    <svg
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            <path
                                d="M6 18L18 6M6 6l12 12"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        ) : (
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        )}
                    </svg>
                </button>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-20">
                {links.map((link) => (
                    <Link key={link.href} href={link.href} className="text-black font-opensans-light md:text-[16px] hover:text-zinc-500 transition-colors">
                        {link.label}
                    </Link>
                ))}
            </div>

            {isOpen && (
                <div className="md:hidden absolute top-14 left-0 right-0 bg-[#2C70AA]">
                    <div className="flex flex-col items-center py-4 space-y-4">
                        {links.map((link) => (
                            <Link key={link.href} href={link.href} className="text-zinc-200 hover:text-zinc-500 transition-colors" onClick={toggleMenu}>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
            <div className='hidden md:block opacity-0'></div>
        </nav>
    );
};

export default NavBar;
