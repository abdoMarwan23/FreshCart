import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import LoadingScrean from "../LoadingScrean/LoadingScrean"
import CartDetails from "../CartDetails/CartDetails"
import { Helmet } from "react-helmet"


export default function Cart() {

    const [cart, setCart] = useState(null)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getUserCart()
    }, [])
    

    

    async function getUserCart() {
        setIsLoading(true)
        let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/cart', {
            headers: {
                token: localStorage.getItem("token")
            }
        }).finally(() => {
            setIsLoading(false);
        })
        setCart(data);
        console.log(data);
        // cartExist = true;
    }

    console.log(cart)

    async function clearUserCart() {
        setIsLoading(true)
        let { data } = await axios.delete('https://ecommerce.routemisr.com/api/v1/cart', {
            headers: {
                token: localStorage.getItem("token")
            }
        })
        setCart(null);
        setIsLoading(false);
        // cartExist = false;
        // console.log(data)
    }

    // const f = null;


    return (
        <>
            <Helmet>
                <title>Cart</title>
            </Helmet>
            {isLoading ? <LoadingScrean /> :
                cart?.numOfCartItems ? <div className="container mx-auto mt-10">
                    <div className="sm:flex shadow-md my-10 card">
                        <div className="  w-full  sm:w-2/3  px-10 py-10">
                            <div style={{ color: 'var(--text-color-title)' }} className="flex justify-between  border-b pb-8">
                                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                                <h2 className="font-semibold text-2xl">{cart?.numOfCartItems}</h2>
                            </div>
                            {cart?.data.products?.map((product, index) => {
                                return <>
                                    <CartDetails key={index} product={product} cart={cart} setCart={setCart} setIsLoading={setIsLoading} />
                                </>
                            })}
                    
                            <button onClick={clearUserCart} className="text-red-500 border-2 w-60 border-red-500 hover:bg-red-500 hover:text-white rounded-lg transition-all ease-in-out duration-300 p-2 mt-4 mx-auto block text-center" >Clear Cart</button>
                            <Link to={'/'} className="flex font-semibold text-[#359751] hover:text-[#289045]  text-sm mt-10">
                                <svg className="fill-current mr-2 text-[#359751] hover:text-[#289045]   w-4" viewBox="0 0 448 512">
                                    <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                                </svg>
                                Continue Shopping
                            </Link>
                        </div>
                        <div id="summary" className=" w-full   sm:w-1/3   md:w-1/2     px-8 py-10 ">
                            <h1   style={{ color: 'var(--text-color-title)' }}  className="font-semibold text-2xl  border-b pb-8">Order Summary</h1>
                            <div   style={{ color: 'var(--text-color-title)' }} className="flex justify-between mt-10 mb-5">
                                <span className="font-semibold  text-sm uppercase">{cart?.numOfCartItems}</span>
                                <span className="font-semibold  text-sm">{cart?.data.totalCartPrice} egp </span>
                            </div>
                            <div>
                                <label  style={{ color: 'var(--text-color-title)' }} className="font-medium inline-block  mb-3 text-sm uppercase">
                                    Shipping
                                </label>
                                <select className="block p-2 bg-[#ffffff] text-[#1f1f1f] outline-none focus:outline-[#359751]   w-full text-sm">
                                    <option>Standard shipping - egp 00</option>
                                </select>
                            </div>
                            <div className="py-10">
                                <label style={{ color: 'var(--text-color-title)' }} htmlFor="promo" className="font-semibold  inline-block mb-3 text-sm uppercase">
                                    Promo Code
                                </label>
                                <input type="text" id="promo" placeholder="Enter your code" className="p-2 bg-[#ffffff] text-[#1f1f1f] outline-none focus:outline-[#359751]   text-sm w-full" />
                            </div>
                            <button className="bg-[#46c05e] hover:bg-[#5add74] rounded-lg px-5 py-2 text-sm text-zinc-50 uppercase">
                                Apply
                            </button>
                            <div className="border-t mt-8">
                                <div style={{ color: 'var(--text-color-title)' }} className="flex font-semibold  justify-between py-6 text-sm uppercase">
                                    <span>Total cost</span>
                                    <span>{cart?.data.totalCartPrice} egp </span>
                                </div>
                                <Link to={'/checkoutDetails/' + cart?.data._id} className=" block text-center bg-[#359751]  font-semibold  rounded hover:bg-[#289045]  py-3 text-sm text-white uppercase w-full">
                                    Checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div> : <h1 className="text-4xl font-bold text-center h-96 mx-auto my-7">there is no items in your card</h1>
            }
        </>
    )
}