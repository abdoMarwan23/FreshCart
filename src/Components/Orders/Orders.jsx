import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {jwtDecode} from 'jwt-decode';
import LoadingScrean from "../LoadingScrean/LoadingScrean";


export default function Orders() {

    let [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getAllOrders()
    }, [])



    let token = localStorage.getItem('token');



    const decoded = jwtDecode(token);
    console.log('Decoded Token:', decoded.id);




    async function getAllOrders() {
        setIsLoading(true)
        let { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/orders/user/" + decoded.id)
        // console.log(data);
        setProducts(data);
        setIsLoading(false)
    }

    // console.log(products)
    

    return (
        <>
            <Helmet>
                <title>Orders</title>
            </Helmet>
            {isLoading? <LoadingScrean/>  :<div className=" mb-5 mt-4">
                
                <div className=" px-4 flex flex-col xl:flex-row lg:justify-center items-start ">
                    
                    <div className="mt-10 px-5  mb-6 w-full ">
                        {products?.map((pro, i) => {
                            // console.log(pro)
                            return <div key={i} className="">
                                <div key={i} className={`card  mb-7 `}>
                                    <div className="flex justify-start items-center mb-3 px-3 py-3  space-y-2 flex-col">
                                        <h1 style={{ color: 'var(--text-color-title)' }} className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9">Order #{pro.id}</h1>
                                        <p style={{ color: 'var(--text-color-pragraph)' }} className="text-base  font-medium leading-6">{pro.createdAt}</p>
                                    </div>
                                    {pro?.cartItems.map((items, index) => {
                                        // console.log(items);
                                        return (
                                            <div key={index}>
                                                <div
                                                    className={`flex flex-col sm:flex-row justify-center text-center  sm:justify-between items-center px-3 mb-2 pb-3 ${index !== pro.cartItems.length - 1 ? 'border-b border-gray-200' : ''
                                                        }`}
                                                >
                                                    <div className="w-44">
                                                        <img
                                                            src={items.product.imageCover}
                                                            className="w-44"
                                                            alt={items.product.title}
                                                        />
                                                    </div>
                                                    <div className=" mb-3">
                                                        <div style={{ color: 'var(--text-color-title)' }} className="text-2xl w-64 max-w-xs overflow-hidden whitespace-nowrap text-ellipsis mb-2" >{items.product.title}</div>
                                                        <div style={{ color: 'var(--text-color-pragraph)' }}  >Brand: <span style={{ color: 'var(--text-color-title)' }} >{items.product.brand.name}</span> </div>
                                                        <div style={{ color: 'var(--text-color-pragraph)' }}   >Category: <span style={{ color: 'var(--text-color-title)' }} >{items.product.category.name}</span> </div>
                                                    </div>
                                                    <div style={{ color: 'var(--text-color-title)' }}  > <span style={{ color: 'var(--text-color-pragraph)' }}  >Price: </span> {items.price} <span style={{ color: 'var(--text-color-pragraph)' }} className="text-sm"  >Egp</span></div>
                                                    <div style={{ color: 'var(--text-color-title)' }} className="mb-2" > <span style={{ color: 'var(--text-color-pragraph)' }}  >Count: </span>{items.count}</div>
                                                    <div style={{ color: 'var(--text-color-title)' }} className="font-bold"  > <span style={{ color: 'var(--text-color-pragraph)' }}  >Total: </span>{items.price * items.count} <span style={{ color: 'var(--text-color-pragraph)' }} className="text-sm" >Egp</span> </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="flex justify-center md:flex-row flex-col items-center sm:items-stretch mb-20 w-full gap-y-2 sm:space-x-3">
                                    <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full card space-y-6">
                                        <h3 style={{ color: 'var(--text-color-title)' }} className="text-xl font-semibold leading-5 ">Summary</h3>
                                        <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                            <div className="flex justify-between w-full">
                                                <p style={{ color: 'var(--text-color-pragraph)' }} className="text-base  leading-4 ">Subtotal</p>
                                                <p style={{ color: 'var(--text-color-title)' }} className="text-base leading-4 ">{pro.totalOrderPrice} <span style={{ color: 'var(--text-color-pragraph)' }} className="text-sm" >Egp</span> </p>
                                            </div>
                                            <div className="flex justify-between items-center w-full">
                                                <p style={{ color: 'var(--text-color-pragraph)' }}  className="text-base  leading-4">Discount <span style={{ backgroundColor: 'var(--text-color-title)', color: 'var(--background-color)' }} className=" p-1 text-xs rounded-lg font-medium leading-3 ">STUDENT</span></p>
                                                <p style={{ color: 'var(--text-color-title)' }} className="text-base leading-4 ">0</p>
                                            </div>
                                            <div className="flex justify-between items-center w-full">
                                                <p style={{ color: 'var(--text-color-pragraph)' }}  className="text-base leading-4 ">Shipping</p>
                                                <p style={{ color: 'var(--text-color-title)' }}  className="text-base  leading-4 ">{pro.shippingPrice} <span style={{ color: 'var(--text-color-pragraph)' }} className="text-sm"  >Egp</span> </p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between items-center w-full">
                                            <p style={{ color: 'var(--text-color-pragraph)' }} className="text-lg  font-semibold leading-4">Total</p>
                                            <p style={{ color: 'var(--text-color-title)' }} className="text-lg  font-black leading-4 ">{pro.totalOrderPrice} <span style={{ color: 'var(--text-color-pragraph)' }} className="text-base" >Egp</span> </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full card space-y-6">
                                        <h3 style={{ color: 'var(--text-color-title)' }} className="text-xl font-semibold leading-5 ">Shipping</h3>
                                        <div className="flex justify-between items-start w-full">
                                            <div className="flex justify-center items-center space-x-4">
                                                <div className="w-8 h-8">
                                                    <img className="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                                                </div>
                                                <div className="flex flex-col justify-start items-center">
                                                    <p style={{ color: 'var(--text-color-title)' }} className="text-lg leading-6  font-semibold">DPD Delivery<br /><span style={{ color: 'var(--text-color-paragraph)' }} className="font-normal">Delivery with 24 Hours</span></p>
                                                </div>
                                            </div>
                                            <p style={{ color: 'var(--text-color-title)' }}  className="text-lg font-semibold leading-6">{pro.shippingPrice} <span style={{ color: 'var(--text-color-pragraph)' }} className="text-sm"  >Egp </span></p>
                                        </div>
                                        <div className="w-full flex justify-center items-center">
                                            <button style={{ color: 'var(--text-color-title)', backgroundColor: 'var(--bg-color-input)' }} className="  focus:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-[#359751] border border-[#359751]  py-5 w-96 md:w-full  text-base font-medium leading-4 text-white">View Carrier Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}

                    </div>

                    <div className=" card w-full xl:mt-11 xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                            <h3 style={{ color: 'var(--text-color-title)' }}  className="text-2xl  font-semibold leading-5 ">Customer</h3>
                            <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                                <div className="flex flex-col justify-start items-start flex-shrink-0">
                                    <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                        <img src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar" />
                                        <div className="flex justify-start items-start flex-col space-y-2">
                                            <p style={{ color: 'var(--text-color-title)' }}  className="text-base dark:text-white font-semibold leading-4 text-left text-gray-800">{products[0]?.user.name}</p>
                                            <p style={{ color: 'var(--text-color-pragraph)' } } className="text-sm dark:text-gray-300 leading-5 text-gray-600">{products?.length - 1} Previous Orders</p>
                                        </div>
                                    </div>
                                    <div style={{ color: 'var(--text-color-title)' }} className="flex justify-center md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                        <img className="" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1.svg" alt="email" />
                                        <p style={{ color: 'var(--text-color-title)' }} className="cursor-pointer text-sm leading-5 ">{products[0]?.user.email}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                                    <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                                        <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-1 xl:mt-8">
                                            <p style={{ color: 'var(--text-color-title)' }}  className="text-base  font-semibold leading-4 text-center md:text-left">Shipping Address</p>
                                            <p style={{ color: 'var(--text-color-pragraph)' }} className="w-48 lg:w-full  xl:w-48 text-center md:text-left text-sm leading-5">{products[0]?.shippingAddress.details}</p>
                                        </div>
                                        <div className="flex justify-center md:justify-start items-center md:items-start xl:pb-5 flex-col space-y-1">
                                            <p style={{ color: 'var(--text-color-title)' }} className="text-base font-semibold leading-4 text-center md:text-left ">Billing Address</p>
                                            <p style={{ color: 'var(--text-color-pragraph)' }} className="w-48 lg:w-full   xl:w-48 text-center md:text-left text-sm leading-5 ">{products[0]?.shippingAddress.details}</p>
                                        </div>
                                    </div>
                                    <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                                        <button style={{ color: 'var(--text-color-title)', backgroundColor: 'var(--bg-color-input)' }} className="mt-6 md:mt-0  py-5  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#359751] border border-[#359751]  w-96 2xl:w-full  font-medium leading-4 ">Edit Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

            </div>}
        </>
    )
}
