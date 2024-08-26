// import React from 'react'

import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    let { userToken, setUserToken } = useContext(AuthContext);

    function signOut() {
        setUserToken('');
        localStorage.removeItem('token')
        navigate('/login');

    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <div className="top-0 py-1 lg:py-2 w-full  lg:relative z-50  border-none  shadow-md drop-shadow-md">
            <nav className="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none lg:py-4">
                <div className="flex items-center justify-between">
                    <button>
                        <div className="flex items-center space-x-2">
                            <h2 style={{ color: 'var(--text-color-title)' }} className=" font-bold text-2xl">FreshCart</h2>
                        </div>
                    </button>
                    {userToken && <div className="hidden lg:block">
                        <ul style={{ color: 'var(--text-color-title)' }}  className="flex space-x-6 text-base font-bold">
                            <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                <NavLink to={'/'}>Home</NavLink>
                            </li>
                            <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                <NavLink to={'/brands'}>Brands</NavLink>
                            </li>
                            <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                <NavLink to={'/products'}>Products</NavLink>
                            </li>
                            <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                <NavLink to={'/catigories'}>Catigories</NavLink>
                            </li>
                            <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                <NavLink to={'/wishList'}>wishList</NavLink>
                            </li>
                            <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                <NavLink to={'/cart'}>Cart</NavLink>
                            </li>
                            
                        </ul>
                    </div>}
                    <div className="hidden lg:flex lg:items-center gap-x-2">
                        {!userToken && <>
                        <NavLink to={'/rgister'} className="flex items-center text-black dark:text-white justify-center ml-3 pr-2 py-2.5 font-semibold">Sign up</NavLink>
                        <NavLink to={'/login'} className="flex items-center justify-center rounded-md bg-[#359751] text-white  hover:bg-[#289045]  px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">Login</NavLink>
                        </>}
                        {userToken && <li className="flex items-center text-black dark:text-white justify-center ml-3 pr-2 py-2.5 font-semibold">
                                <button onClick={signOut} className="flex items-center justify-center rounded-md bg-[#359751] text-white  hover:bg-[#289045]  px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200" >SignOut</button>
                        </li>}
                    </div>
                    <div className="flex items-center justify-center lg:hidden">
                        <button style={{ color: 'var(--text-color-title)' }} onClick={toggleMenu} className="focus:outline-none "><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 20 20" aria-hidden="true" className="text-2xl  focus:outline-none active:scale-110 active:text-red-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" /></svg></button>
                    </div>
                </div>
                {userToken && <>
                    {menuOpen && (
                        <div className={`lg:hidden transition-transform duration-300 ease-in-out ${menuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}>
                            <ul style={{ color: 'var(--text-color-pragraph)' }} className="flex flex-col space-y-5 mt-4 text-base font-bold ">
                                <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                    <NavLink to={'/'} onClick={() => setMenuOpen(false)}>Home</NavLink>
                                </li>
                                <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                    <NavLink to={'/brands'} onClick={() => setMenuOpen(false)}>Brands</NavLink>
                                </li>
                                <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                    <NavLink to={'/products'} onClick={() => setMenuOpen(false)}>Products</NavLink>
                                </li>
                                <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                    <NavLink to={'/catigories'} onClick={() => setMenuOpen(false)}>Catigories</NavLink>
                                </li>
                                <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                    <NavLink to={'/wishList'} onClick={() => setMenuOpen(false)}>wishList</NavLink>
                                </li>
                                <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                                    <NavLink to={'/cart'} onClick={() => setMenuOpen(false)}>Cart</NavLink>
                                </li>
                            </ul>
                        </div>
                    )}
                </>}
                            {menuOpen && <div className="flex flex-col gap-y-2 mt-4">
                                {!userToken && <>
                                    <NavLink to={'/rgister'} className="flex items-center text-black dark:text-white justify-center ml-3 pr-2 py-2.5 font-semibold">Sign up</NavLink>
                                    <NavLink to={'/login'} className="flex items-center justify-center rounded-md bg-[#359751] text-white  hover:bg-[#289045]  px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">Login</NavLink>
                                </>}
                                {userToken && <li className="flex items-center text-black dark:text-white justify-center ml-3 pr-2 py-2.5 font-semibold">
                                    <button onClick={signOut} className="flex items-center justify-center rounded-md bg-[#359751] text-white  hover:bg-[#289045] px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200" >SignOut</button>
                                </li>}
                            </div>}
            </nav>
        </div>


    )
}
