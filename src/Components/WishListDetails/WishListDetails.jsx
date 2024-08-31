// import React from 'react'

import axios from "axios";
import { Bounce, toast } from "react-toastify";
import LoadingScrean from "../LoadingScrean/LoadingScrean";
import { Link } from "react-router-dom";

export default function WishListDetails({ product, setWishList, isLoading, setIsLoading }) {
    async function getUserWishList() {
        setIsLoading(true)
        let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/wishlist', {
          headers: {
            token: localStorage.getItem("token")
          }
        }).finally(() => {
          setIsLoading(false);
      })
        // setIsLoading(false)
        setWishList(data);
        console.log(data.data)
    }
    
    async function deleteFromWishList(productId) {
        setIsLoading(true)
        let { data } = await axios.delete('https://ecommerce.routemisr.com/api/v1/wishlist/' + productId, {
            headers: {
                token: localStorage.getItem("token")
            } 
        })
        // console.log(productId)
        console.log(data);
        // console.log(product)
        setIsLoading(false)
        getUserWishList();


        toast.success("item has been deleted successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    return (
        <>
            {isLoading ? <LoadingScrean /> :
                product &&
                <div className="md:flex  items-strech py-8 md:py-10 lg:py-8 border-t">
                    <div className="md:w-4/12 2xl:w-1/4 w-full">
                        <Link to={'/productdetails/' + product._id} >
                            <img src={product?.imageCover} alt="Black Leather Purse" className="h-full object-center object-cover block " />
                        </Link>
                    </div>
                    <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col items-center lg:items-start justify-center">
                        <p style={{ color: 'var(--text-color-title)' }} className=" font-black leading-none mt-4  pt-1 text-xl  ">{product?.title}</p>
                        <p style={{ color: 'var(--text-color-pragraph)' }} className="text-xs leading-3  pb-4 pt-1  ">RF293</p>
                        <p className="text-m py-3 leading-3 text-[#359751] hover:text-[#289045] font-bold pt-2">price:  {product?.price} egp</p>
                        <p style={{ color: 'var(--text-color-pragraph)' }} className="text-xs leading-3   pb-2 pt-4">Color: Black</p>
                        <p style={{ color: 'var(--text-color-pragraph)' }} className="text-xs leading-3  ">Composition: 100% calf leather</p>
                        <div className="flex items-center justify-between pt-5">
                            <div className="flex itemms-center">
                                <button onClick={() => deleteFromWishList(product?._id)} className="leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    )
}
