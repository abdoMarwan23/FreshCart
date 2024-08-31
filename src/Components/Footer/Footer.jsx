// import React from 'react'

import { useEffect } from "react";
import { useState } from "react";

export default function Footer() {


    const [isSubscribed, setIsSubscribed] = useState(false);

    useEffect(() => {
        // Check localStorage for subscription status on component mount
        const subscriptionStatus = localStorage.getItem('isSubscribed');
        if (subscriptionStatus === 'true') {
            setIsSubscribed(true);
        }
    }, []);

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Set the subscription state to true
        setIsSubscribed(true);
        // Store subscription status in localStorage
        localStorage.setItem('isSubscribed', 'true');
    };



    return (
        <footer className="p-4 grid md:grid-cols-2 gap-12 xl:col-span-2 xl:mt-0  border-t border-[#ffffff6a] ">
            <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                    <h3 style={{ color: 'var(--text-color-title)' }} className="text-sm font-semibold leading-6 ">Links</h3>
                    {/* <ul style={{ color: 'var(--text-color-pragraph)' }}  role="list" className="mt-6 space-y-4"> */}
                    <div className="social-media mt-5 relative">
                        <a target="_blank" href="https://www.facebook.com/profile.php?id=100013287300261&ref=xav_ig_profile_web">
                            <div className="layer">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span className="fab fa-facebook-f"></span>
                            </div>
                            <div className=" text-facebook pl-11 absolute bottom-2 ">Facebook</div>
                        </a>
                    </div>
                    <div className="social-media relative my-2">
                        <a target="_blank" href="https://www.instagram.com/abdo_marwan_23?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                            <div className="layer instagram">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span className="fa-brands fa-instagram"></span>
                            </div>
                            <div className=" text-instagram pl-11 absolute bottom-2">Instagram</div>
                        </a>
                    </div>
                    <div className="social-media relative mt-1">
                        <a target="_blank" href="https://www.linkedin.com/in/abdelrahman-marwan-17bb28264/">
                            <div className="layer">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span className="fa-brands fa-linkedin"></span>
                            </div>
                            <div className=" text-linkedin pl-11 absolute bottom-2">Linkedin</div>
                        </a>
                    </div>
                    {/* </ul> */}
                </div>
                <div className="mt-10 md:mt-0">
                    <h3 style={{ color: 'var(--text-color-title)' }} className="text-sm font-semibold leading-6 ">Support</h3>
                    <ul style={{ color: 'var(--text-color-pragraph)' }} role="list" className="mt-6 space-y-4">
                        <li>
                            <a className="text-sm leading-6  hover:" href="#">Terms and
                                Conditions
                            </a>
                        </li>
                        <li>
                            <a className="text-sm leading-6  hover:" href="#">Privacy
                                Policy
                            </a>
                        </li>
                        <li>
                            <a className="text-sm leading-6  hover:" href="#">Legal Notice
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className>
                <div>
                    <h3 style={{ color: 'var(--text-color-title)' }} className="text-sm font-semibold leading-6">Subscribe to our Newsletter</h3>
                    <p style={{ color: 'var(--text-color-pragraph)' }} className="mt-2 text-sm leading-6">
                        We will inform you about promotions and exclusive offers as well as new teaching materials.
                    </p>

                    {/* Conditional rendering based on subscription status */}
                    {isSubscribed ? (
                        <div className="mt-5 p-4 w-full text-center  bg-green-100 text-green-800 rounded-xl">
                            You have subscribed successfully! You will receive updates.
                        </div>
                    ) : (
                        <form className="mt-6 sm:flex sm:max-w-md" onSubmit={handleSubscribe}>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input
                                style={{ backgroundColor: 'var(--bg-color-input)', color: 'var(--text-color-input)' }}
                                type="email"
                                name="email"
                                id="email-address"
                                autoComplete="email"
                                required
                                className="w-full min-w-0 appearance-none rounded-md px-2 text-base leading-7 outline-none focus:outline-[#359751] shadow-sm focus:ring-[#359751] sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                                placeholder="E-Mail Address"
                                aria-label="Email Address"
                            />
                            <div className="mt-4 rounded-md sm:mt-0 sm:ml-4 sm:flex-shrink-0">
                                <button
                                    className="inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm bg-[#359751] text-white hover:bg-[#289045] focus:outline-none focus:ring-2 focus:ring-[#359751] focus:ring-offset-2 disabled:bg-gray-400 w-full"
                                    type="submit"
                                    aria-label="Subscribe"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    )}
                </div>

            </div>
        </footer>

    )
}
