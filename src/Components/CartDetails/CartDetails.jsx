import { Bounce, toast } from "react-toastify";
import axios from "axios"
import { useEffect, useState } from "react";


export default function CartDetails({ product, cart, setCart, setIsLoading }) {

    let [btnLoading, setBtnLoading] = useState(false);
    const [productCount, setProductCount] = useState(product.count)
    
    async function deletItemFromCart(productId) {
        setIsLoading(true)
        let { data } = await axios.delete('https://ecommerce.routemisr.com/api/v1/cart/' + productId, {
            headers: {
                token: localStorage.getItem("token")
            }
        })
        setIsLoading(false);
        console.log(data);
        setCart(data);

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


    async function UpdateProductCount(productId, count) {
        setBtnLoading(true);
        let { data } = await axios.put("https://ecommerce.routemisr.com/api/v1/cart/" + productId, {
            count
        }, {
            headers:
            {
                token: localStorage.getItem("token")
            }
        })
        setCart(data)
        setBtnLoading(false);
    }


    useEffect(() => {
        setProductCount(product.count)
    }, [cart])



    return (
        <>
            {product &&
                <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t  border-gray-50">
                    <div className="md:w-4/12 2xl:w-1/4 w-full">
                        <img src={product.product.imageCover} alt="Black Leather Purse" className="h-full object-center object-cover block " />
                    </div>
                    <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                        <p style={{ color: 'var(--text-color-pragraph)' }} className="text-xs leading-3  md:pt-0 pt-4">RF293</p>
                        <div className="flex items-center justify-between w-full">
                            <p  style={{ color: 'var(--text-color-title)' }} className="text-base font-black leading-none ">{product.product.title}</p>
                            <div className="">
                                <button disabled={product.count == 1 || btnLoading} onClick={() => UpdateProductCount(product.product._id, product.count - 1)} className="cursor-pointer rounded-l disabled:hover:bg-gray-100 disabled:hover:text-black disabled:cursor-not-allowed bg-[#ececec] py-1 px-3 duration-100 text-slate-900 hover:bg-[#359751] hover:text-zinc-50  " >{btnLoading ? <i className="fas fa-spinner fa-spin"></i> : '-'}</button>
                                <input onBlur={() => product.count != productCount && UpdateProductCount(product.product._id, productCount)} onChange={(e) => setProductCount(e.target.value)} className="h-8 w-16  pl-3 style={{ backgroundColor: 'var(--bg-color-input)', color: 'var(--text-color-input)' }} focus:outline-[#359751] my-[1px] text-center text-s outline-none" type="number" value={productCount} min={1} />
                                <button disabled={btnLoading} onClick={() => UpdateProductCount(product.product._id, product.count + 1)} className="cursor-pointer rounded-r bg-[#ececec] py-1 px-3 duration-100 text-slate-900 hover:bg-[#359751] hover:text-zinc-50   " >{btnLoading ? <i className="fas fa-spinner fa-spin"></i> : '+'}</button>
                            </div>
                        </div>
                        <p className="text-m leading-3 my-2 text-[#359751] hover:text-[#289045]  pt-2">price:   {product.price} egp</p>
                        <p style={{ color: 'var(--text-color-pragraph)' }} className="text-xs leading-3  py-4">Color: Black</p>
                        <p style={{ color: 'var(--text-color-pragraph)' }} className="w-96 text-xs leading-3 ">Composition: 100% calf leather</p>
                        <div className="flex items-center justify-between pt-5">
                            <div className="flex itemms-center">
                                <p style={{ color: 'var(--text-color-title)' }} className="text-xs my-2 leading-3 underline  font-bold cursor-pointer">Add to favorites</p>
                                <button onClick={() => deletItemFromCart(product.product._id)} className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</button>
                            </div>
                            <p style={{ color: 'var(--text-color-title)' }} className="text-base font-black leading-none "> {product.price * product.count} egp</p>
                        </div>
                    </div>
                </div>}
        </>
    )
}
