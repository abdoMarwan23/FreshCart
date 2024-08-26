
import { useFormik } from 'formik';
import './Login.css';
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { Helmet } from 'react-helmet';

export default function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate();
    let { setUserToken } = useContext(AuthContext)


    const validationSchema = Yup.object({
        email: Yup.string().required("email is required").matches(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/ ,"Please enter valid Email address"),
        password: Yup.string().required("password is required").matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),
    })

    const initialValues = {
        "email": "",
        "password": "",
    }

    async function onSubmit() {
        setErrMsg("")
        setIsLoading(true)
        await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", values).then(({ data }) => {
            setIsLoading(false);
            setUserToken(data.token)
            localStorage.setItem('token', data.token)
            if (location.pathname == '/login') {
                navigate('/')
            } else {
                navigate(location.pathname)
            }
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
        <div className="py-16  ">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="  card  flex justify-center items-center rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div className="w-full p-8 lg:w-1/2  ">
                    <h2 style={{ color: 'var(--text-color-title)' }} className="text-2xl font-semibold  text-center">FreshCart</h2>
                    <p style={{ color: 'var(--text-color-title)' }} className="text-xl text-center ">Welcome back!</p>
                    <a style={{ backgroundColor: 'var(--background-color', color: 'var(--text-color-title)' }} href="#" className="flex items-center justify-center mt-4  rounded-lg shadow-md hover:bg-gray-100">
                        <div className="px-4 py-3">
                            <svg className="h-6 w-6" viewBox="0 0 40 40">
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                            </svg>
                        </div>
                        <h1 style={{  color: 'var(--text-color-title)' }} className="px-4 py-3 w-5/6 text-center  hover:text-gray-600 font-bold">Sign in with Google</h1>
                    </a>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 lg:w-1/4" />
                        <a style={{  color: 'var(--text-color-pragraph)' }} href="#" className="text-xs text-center  uppercase">or login with email</a>
                        <span className="border-b w-1/5 lg:w-1/4" />
                    </div>
                    <div className="mt-4">
                        <label style={{  color: 'var(--text-color-title)' }} className="block  text-sm font-bold mb-2">Email Address</label>
                        <input style={{ backgroundColor: 'var(--bg-color-input)', color: 'var(--text-color-input)' }} onBlur={handleBlur} onChange={handleChange} value={values.email} type="email" placeholder="Email" name="email" className=" outline-none focus:outline-[#359751]   rounded py-2 px-4 block w-full appearance-none" />
                        {touched.email && errors.email && <p className='text-red-500'>{errors.email}</p>}
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label style={{  color: 'var(--text-color-title)' }} className="block  text-sm font-bold mb-2">Password</label>
                        </div>
                        <input style={{ backgroundColor: 'var(--bg-color-input)', color: 'var(--text-color-input)' }} onBlur={handleBlur} onChange={handleChange} value={values.password} type="password" placeholder="Password" name="password" className=" outline-none focus:outline-[#359751]  rounded py-2 px-4 block w-full appearance-none" />
                        {touched.password && errors.password && <p className='text-red-500'>{errors.password}</p>}
                        <Link to={'/forgetPassword'} >
                            <p style={{  color: 'var(--text-color-pragraph)' }} className="text-xs   hover:text-[#359751] focus:ring-[#359751] flex justify-end pt-2">Forget Password?</p>
                        </Link>
                    </div>
                    <div className="mt-8">
                        <button onClick={handleSubmit} type='submit' className="bg-[#359751] text-white font-bold py-2 px-4 w-full rounded hover:bg-[#289045] disabled:bg-slate-500" disabled={isLoading} >Login {isLoading && <i className='fas fa-spinner fa-spin mx-2'></i>}</button>
                    </div>
                    {errMsg && <p className='text-red-600 text-center'>{errMsg}</p>}
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 md:w-1/4" />
                        <Link to={'/rgister'} style={{  color: 'var(--text-color-pragraph)' }}  className="text-xs border-b  uppercase">or sign up</Link>
                        <span className="border-b w-1/5 md:w-1/4" />
                    </div>
                </div>
            </div>
        </div>

    )
}
