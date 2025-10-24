"use client"
import React, { useState } from "react";

export default function MyHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    const [userMenuOpen, setUserMenuOpen] = useState(false);

    return (
        <div className="top-0 text-[var(--off-white)] dark:text-[var(--cherry-red)] text-center min-h-50 rounded-b-[30px] w-full">
            <nav>
                <div className="max-w-screen-xl w-full flex flex-wrap items-center justify-between mx-auto">


                    <div className="flex items-center">
                        <img className="w-8 h-8 rounded-full border-r-2  bg-sky-100" src="./favicon-32x32.png" alt="user" />
                        <div className="text-black dark:text-(--off-white) font-bold  items-center justify-items-center bg-FCF6F5  ">
                            <p><span className="text-(--cherry-red) dark:text-black">Uni</span>Together</p>
                        </div>
                    </div>


                    
                    <div className="flex items-center space-x-3 rtl:space-x-reverse"></div>


                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded={userMenuOpen} data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom" onClick={() => setUserMenuOpen((open) => !open)}>
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full" src="./favicon-32x32.png" alt="user" />
                        </button>
                        
                        <div className={`z-50 my-4 text-base list-none bg-(--cherry-red) dark:bg-white divide-y absolute mt-70  divide-gray-100 rounded-lg shadow-sm tex-black dark:divide-gray-600 ${userMenuOpen ? '' : 'hidden'}`} id="user-dropdown">
                            <div className="px-4 py-3">
                                <span className="block text-sm text-white dark:text-black">Matthew Quartey</span>
                                <span className="block text-sm text-gray-800 truncate dark:text-gray-400">FALLITO</span>
                            </div>
                            <ul className="py-2" aria-labelledby="user-menu-button">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-white dark:text-black hover:bg-gray-100 hover:text-black dark:hover:bg-(--cherry-red)  dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-white dark:text-black hover:bg-gray-100 hover:text-black dark:hover:bg-(--cherry-red)  dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-white dark:text-black hover:bg-gray-500 hover:text-black dark:hover:bg-(--cherry-red)  dark:hover:text-white">Earnings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-white dark:text-black hover:bg-gray-100 hover:text-black dark:hover:bg-(--cherry-red)  dark:hover:text-white">Sign out</a>
                                </li>
                            </ul>
                        </div>
                        <button
                            data-collapse-toggle="navbar-user"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-user"
                            aria-expanded={menuOpen}
                            onClick={() => setMenuOpen((open) => !open)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                    </div>




                    <div
                        className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${menuOpen ? "flex" : "hidden"}`}
                        id="navbar-user"
                    >
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   dark:border-gray-700">
                            <li>
                                <a href="#" className="block py-2 px-3 text-black dark:text-white  rounded-sm md:bg-transparent  md:p-0" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent hover:text-(--cherry-red) md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-(--cherry-red) md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent  hover:text-(--cherry-red) md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-(--cherry-red) md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent hover:text-(--cherry-red) md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-(--cherry-red) md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent hover:text-(--cherry-red)  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-(--cherry-red) md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}