import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import RatingStars from "../RatingStars/RatingStars";
import LoadingScrean from "../LoadingScrean/LoadingScrean";
import ProductImgSlider from "../ProductImgSlider/ProductImgSlider";
import RelatedProducts from "../RelatedProducts/RelatedProducts";
import { addProductToCart } from "../../cartService";
import { Helmet } from "react-helmet";
import { toast, Bounce } from "react-toastify";
// import { AuthContext } from "../../Context/AuthContext";





export default function ProductDetails() {

    const [isLoading, setIsLoading] = useState(true)
    let { id } = useParams()
    // console.log(id)

    const [productDetails, setProductDetails] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState(null);
    const [isInWishlist, setIsInWishlist] = useState(false);

    useEffect(() => {
        getProductDetails();
    }, [id])

    async function getProductDetails() {
        setIsLoading(true)
        let { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/products/" + id);
        setProductDetails(data.data);
        getRelatedProducts(data.data?.category._id)
        setIsLoading(false);
        checkIfInWishlist(data.data._id);
        // console.log(data.data);
    }
    
    async function getRelatedProducts(categoryid) {
        let { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/products", {
            params: {
                "category": categoryid
            }
        })
        setRelatedProducts(data.data)
        console.log(data.data)
    }
    


    async function checkIfInWishlist(productId) {
        try {
            let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/wishlist', {
                headers: { token: localStorage.getItem("token") }
            });
            setIsInWishlist(data.data.some(item => item._id === productId));
        } catch (error) {
            console.error('Error checking wishlist status:', error);
        }
    }


    async function toggleWishlist() {
        try {
            if (isInWishlist) {
                await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {
                    headers: { token: localStorage.getItem("token") }
                });
                toast.success("Item removed from wishlist", {
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
            } else {
                await axios.post('https://ecommerce.routemisr.com/api/v1/wishlist', { productId: id }, {
                    headers: { token: localStorage.getItem("token") }
                });
                toast.success("Item added to wishlist", {
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
            setIsInWishlist(!isInWishlist); // Toggle wishlist status
        } catch (error) {
            console.error('Error updating wishlist:', error);
        }
    }



    return (
        <>
            <Helmet>
                <title>{productDetails?.title}</title>
            </Helmet>
            {isLoading ? <LoadingScrean /> :
                <div className="">
                    <div className="container mx-auto px-4 py-8">
                        <div className="grid card py-6 grid-cols-1 lg:grid-cols-2 sm:text-left  text-center mx-auto">
                            <ProductImgSlider images={productDetails?.images}/>
                            <div className="w-full md:w-9/12 px-4">
                                <h2  style={{ color: 'var(--text-color-title)' }} className="text-3xl  font-bold ">{productDetails?.title}</h2>
                                <p style={{ color: 'var(--text-color-pragraph)' }} className=" mb-1 text-xs">SKU: WH1000XM4</p>
                                <p style={{ color: 'var(--text-color-pragraph)' }} className="  mb-6">{productDetails?.description}</p>
                                <div>
                                    <h3 style={{ color: 'var(--text-color-title)' }}  className="text-lg  mt-2 font-semibold ">Brand:</h3>
                                    <p style={{ color: 'var(--text-color-pragraph)' }} className=" mb-2 ml-1"> {productDetails?.brand.name} </p>
                                </div>
                                <div>
                                    <h3 style={{ color: 'var(--text-color-title)' }}  className="text-lg  font-semibold ">Category:</h3>
                                    <p style={{ color: 'var(--text-color-pragraph)' }} className=" ml-1"> {productDetails?.category.name} </p>
                                </div>
                                <div>
                                    <h3 style={{ color: 'var(--text-color-title)' }}  className="text-lg  mt-2 font-semibold ">subCategory:</h3>
                                    <p style={{ color: 'var(--text-color-pragraph)' }} className=" ml-1 mb-3"> {productDetails?.subcategory[0].name} </p>
                                </div>
                                <div className="my-4">
                                    <span className="text-2xl text-[#4fcf74] font-bold mr-2">{productDetails?.price} egp</span>
                                </div>
                                <RatingStars rating={productDetails?.ratingsAverage} />
                                
                                <div className="flex space-x-4 mt-3 mb-6">
                                    <button onClick={() => {addProductToCart(id)}} className=" flex gap-2 items-center  px-6 py-2 rounded-md bg-[#207238] text-white hover:bg-[#289045]  focus:ring-2 focus:ring-[#359751] focus:ring-offset-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                        </svg>
                                        Add to Cart
                                    </button>


                                    <button onClick={toggleWishlist} className={`flex gap-2 items-center px-6 py-2 rounded-md ${isInWishlist ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'} hover:${isInWishlist ? 'bg-red-600' : 'bg-gray-300'} focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                        {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <RelatedProducts relatedProducts={relatedProducts}/>
                    </div>
                </div>
            }
        </>

    )
}
