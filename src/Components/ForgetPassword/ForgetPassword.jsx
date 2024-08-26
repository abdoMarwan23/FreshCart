import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import {  useState } from 'react';
import { Helmet } from 'react-helmet';

export default function ForgetPassword() {
    const [isLoading, setIsLoading] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate();


    const validationSchema = Yup.object({
        email: Yup.string().required("email is required").matches(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/ ,"Please enter valid Email address"),
    })

    const initialValues = {
        "email": "",
    }

    async function onSubmit() {
        setErrMsg("")
        setIsLoading(true)
        await axios.post("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords", values).then(({ data }) => {
            setIsLoading(false);
            navigate('/verifyResetCode')
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
                    <h2 style={{ color: 'var(--text-color-title)' }} className="text-2xl font-semibold  text-center">Forget Password</h2>
                    <div className="mt-4">
                        <label style={{ color: 'var(--text-color-title)' }}  className="block   text-sm font-bold mb-2">Email Address</label>
                        <input onBlur={handleBlur} onChange={handleChange} value={values.email} type="email" placeholder="Email" name="email" style={{ backgroundColor: 'var(--bg-color-input)', color: 'var(--text-color-input)' }} className=" outline-none focus:outline-[#359751]   rounded py-2 px-4 block w-full appearance-none" />
                        {touched.email && errors.email && <p className='text-red-500'>{errors.email}</p>}
                    </div>
                    <div className="mt-8">
                        <button onClick={handleSubmit} type='submit' className="bg-[#359751] text-white font-bold py-2 px-4 w-full rounded hover:bg-[#289045] disabled:bg-slate-500" disabled={isLoading} >ReSet Password {isLoading && <i className='fas fa-spinner fa-spin mx-2'></i>}</button>
                    </div>
                    {errMsg && <p className='text-red-600 text-center'>{errMsg}</p>}
                </div>
            </div>
        </div>
    )
}

