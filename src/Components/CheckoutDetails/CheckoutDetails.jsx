
// import loginImg from '../../assets/tumblr_b5c701e165fc7690ca5bc904f114f22c_7d274a0e_1280.jpg';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

export default function CheckoutDetails() {
    const [isLoading, setIsLoading] = useState(false);  
    const { cartId } = useParams();


    const validationSchema = Yup.object({
        city: Yup.string().required("City is required"),
        details: Yup.string().required("dets is required"),
        phone: Yup.string().required("phone is required"),
    })

    const initialValues = {
        "city": "",
        "details": "",
        "phone" : ""
    }

    async function onSubmit() { 
        setIsLoading(true)
        await axios.post("https://ecommerce.routemisr.com/api/v1/orders/checkout-session/" + cartId, { shippingAddress: values },
            {
                headers: {
                    token: localStorage.getItem('token')
                },
                params: {
                    url: "http://localhost:5173"
                }
            }).then(({ data }) => {
            setIsLoading(false); 
            location.href = data.session.url
        }).catch((err) => {
            setIsLoading(false) 
            console.log(err)
        })
    }

    
    let { handleSubmit, values, handleChange, errors, touched, handleBlur } = useFormik({
        initialValues,
        onSubmit,
        validationSchema 
    })





    return (
        <div className="py-16">
            <Helmet>
                <title>Checkout</title>
            </Helmet>
            <div className="flex justify-center items-center card rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                
                <div className="w-full p-8 lg:w-1/2">
                    <h2  style={{ color: 'var(--text-color-title)' }}   className="text-2xl font-semibold  text-center">Shipping Details</h2>
                    <div className="mt-7">
                        <label style={{ color: 'var(--text-color-title)' }}   className="block   text-sm font-bold mb-2">City Address</label>
                        <input onBlur={handleBlur} onChange={handleChange} value={values.city} type="text" placeholder="city" name="city" className="style={{ backgroundColor: 'var(--bg-color-input)', color: 'var(--text-color-input)' }} outline-none focus:outline-[#359751] focus:shadow-outline  rounded py-2 px-4 block w-full appearance-none"/>
                        {touched.city && errors.city && <p className='text-red-500'>{ errors.city }</p>}
                    </div>
                    <div className="mt-4">
                        <label  style={{ color: 'var(--text-color-title)' }}  className="block   text-sm font-bold mb-2">Details Address</label>
                        <input onBlur={handleBlur} onChange={handleChange} value={values.details} type="text" placeholder="details" name="details" className="style={{ backgroundColor: 'var(--bg-color-input)', color: 'var(--text-color-input)' }} outline-none focus:outline-[#359751] focus:shadow-outline  rounded py-2 px-4 block w-full appearance-none"/>
                        {touched.details && errors.details && <p className='text-red-500'>{ errors.details }</p>}
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label  style={{ color: 'var(--text-color-title)' }}  className="block  text-sm font-bold mb-2">Phone</label>
                        </div>
                        <input onBlur={handleBlur} onChange={handleChange} value={values.phone} type="number" placeholder="phone" name="phone"  className="style={{ backgroundColor: 'var(--bg-color-input)', color: 'var(--text-color-input)' }} outline-none focus:outline-[#359751] focus:shadow-outline  rounded py-2 px-4 block w-full appearance-none"/>
                        {touched.phone && errors.phone && <p className='text-red-500'>{ errors.phone }</p>}
                    </div>
                    <div className="mt-8">
                        <button onClick={handleSubmit} type='submit' className="bg-[#359751] text-white hover:bg-[#289045] font-bold py-2 px-4 w-full rounded  disabled:bg-slate-500" disabled= {isLoading} >Checkout {isLoading && <i className='fas fa-spinner fa-spin mx-2'></i>}</button>
                    </div> 
                </div>
            </div>
        </div>

    )
}
