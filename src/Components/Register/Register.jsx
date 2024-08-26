// import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

export default function Register() {
    const [isLoading, setIsLoading] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [succesMsg, setSuccesMsg] = useState('');
    const Navigate = useNavigate();

    const initialValues = {
        "name": "",
        "email": "",
        "password": "",
        "rePassword": "",
        "phone" : ""

    }

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required").min(2, "Name length must be more than 2 character").max(20, "Name length must be less than 20 character"),
        email: Yup.string().required("email is required").matches(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/ ,"Please enter valid Email address"),
        password: Yup.string().required("password is required").matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),
        rePassword: Yup.string().required("rePassword is required").oneOf([Yup.ref("password")], "password and rePassword must be Matched"),
        phone: Yup.string().required("phone is required")
    })

    async function onSubmit() {
        setSuccesMsg("")
        setErrMsg("")
        setIsLoading(true)
        await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", values).then(({ data }) => {
            setIsLoading(false);
            setSuccesMsg(data.message);
            setTimeout(() => {
                Navigate('/login')
            }, 500);
            console.log(data)
        }).catch((err) => {
            setIsLoading(false)
            setErrMsg(err.response.data.message)
            console.log(err)
        })
    }

    let { handleSubmit, values, handleChange, errors, touched, handleBlur } = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })



    return (
        <div className=" flex justify-center" >
            <Helmet>
                <title>Rgister</title>
            </Helmet>
            <div className="max-w-screen-xl m-0 sm:m-10 card  sm:rounded-lg flex justify-center flex-1">
                <div className="  lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                    <div className="mt-12 flex flex-col items-center">
                        <h1 style={{  color: 'var(--text-color-title)' }} className="text-2xl xl:text-3xl font-extrabold">
                            Sign up
                        </h1>
                        <div className="w-full flex-1 mt-8">
                            <div className="flex flex-col items-center">
                                <button style={{ backgroundColor: 'var(--background-color', color: 'var(--text-color-title)' }} className="w-full  max-w-xs font-bold shadow-sm rounded-lg py-3   flex items-center justify-center transition-all duration-300 ease-in-out ">
                                    <div className=" p-2 rounded-full ">
                                        <svg className="w-4" viewBox="0 0 533.5 544.3">
                                            <path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4" />
                                            <path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853" />
                                            <path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04" />
                                            <path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335" />
                                        </svg>
                                    </div>
                                    <span style={{  color: 'var(--text-color-title)' }} className="ml-4  hover:text-gray-600">
                                        Sign Up with Google
                                    </span>
                                </button>
                            </div>
                            <div className="my-12 border-b pb-2 text-center">
                                <div style={{  color: 'var(--text-color-pragraph)' }} className="text-xs text-center uppercase">
                                    Or sign up with e-mail
                                </div>
                            </div>
                            <div className="mx-auto max-w-xs">
                                <input onBlur={handleBlur} onChange={handleChange} value={values.name} type="text" placeholder="Name" name="name" style={{ backgroundColor: 'var(--bg-color-input)', color: 'var(--text-color-input)' }} className="w-full mt-3  px-8 py-4 rounded-lg font-medium bg-[#1F2A37] text-[#8A919D] outline-none focus:outline-[#359751] placeholder-gray-500 text-sm"  />
                                {touched.name && errors.name && <p className='text-red-500'>{errors.name}</p>}
                                <input onBlur={handleBlur} onChange={handleChange} value={values.email} type="email" placeholder="Email" name="email" style={{ backgroundColor: 'var(--bg-color-input)', color: 'var(--text-color-input)' }} className="w-full mt-3  px-8 py-4 rounded-lg font-medium bg-[#1F2A37] text-[#8A919D] outline-none focus:outline-[#359751] placeholder-gray-500 text-sm" />
                                {touched.email && errors.email && <p className='text-red-500'>{ errors.email }</p>}
                                <input onBlur={handleBlur} onChange={handleChange} value={values.password} type="password" placeholder="Password" name="password" style={{ backgroundColor: 'var(--bg-color-input)', color: 'var(--text-color-input)' }} className="w-full mt-3  px-8 py-4 rounded-lg font-medium bg-[#1F2A37] text-[#8A919D] outline-none focus:outline-[#359751] placeholder-gray-500 text-sm" />
                                {touched.password && errors.password && <p className='text-red-500'>{ errors.password }</p>}
                                <input onBlur={handleBlur} onChange={handleChange} value={values.rePassword} type="password" placeholder="rePassword" name="rePassword" style={{ backgroundColor: 'var(--bg-color-input)', color: 'var(--text-color-input)' }} className="w-full mt-3  px-8 py-4 rounded-lg font-medium bg-[#1F2A37] text-[#8A919D] outline-none focus:outline-[#359751] placeholder-gray-500 text-sm" />
                                {touched.rePassword && errors.rePassword && <p className='text-red-500'>{ errors.rePassword }</p>}
                                <input onBlur={handleBlur} onChange={handleChange} value={values.phone} type="number" placeholder="Phone" name="phone" style={{ backgroundColor: 'var(--bg-color-input)', color: 'var(--text-color-input)' }} className="w-full mt-3  px-8 py-4 rounded-lg font-medium bg-[#1F2A37] text-[#8A919D] outline-none focus:outline-[#359751] placeholder-gray-500 text-sm" />
                                {touched.phone && errors.phone && <p className='text-red-500'>{ errors.phone }</p>}
                                <p style={{  color: 'var(--text-color-pragraph)' }} className="mt-6 text-xs text-center">
                                    I agree to abide by templatana
                                    <a href="#" className="border-b px-1 border-gray-500 border-dotted">
                                        Terms of Service
                                    </a>
                                    and its
                                    <a href="#" className="border-b pl-1 border-gray-500 border-dotted">
                                        Privacy Policy
                                    </a>
                                </p>
                                <button type="submit" onClick={handleSubmit} className="mt-5 bg-[#359751] text-white font-bold py-4 px-4 w-full rounded hover:bg-[#289045]   transition-all duration-300 ease-in-out flex items-center justify-center  disabled:bg-slate-500" disabled= {isLoading} >
                                    <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                        <circle cx="8.5" cy={7} r={4} />
                                        <path d="M20 8v6M23 11h-6" />
                                    </svg>
                                    <span className="ml-3" >
                                        Sign Up
                                    </span>
                                    {isLoading && <i className='fas fa-spinner fa-spin mx-2'></i>}
                                </button>
                                    {succesMsg && <p className='text-green-700 text-center'>{succesMsg}</p>}
                                    {errMsg && <p className='text-red-600 text-center'>{errMsg}</p>}
                                <p style={{  color: 'var(--text-color-pragraph)' }} className='text-xs mt-1  text-center'>already have an account ?  <Link to={'/login'} className=' ml-1 border-b font-bold border-gray-700'>Signin</Link> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
