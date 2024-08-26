import axios from "axios";
import { Bounce, toast } from "react-toastify";

export async function addProductsToWishList(productId) {
    try {
        let { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/wishlist', { productId },
            {
                headers: {
                    token: localStorage.getItem("token")
                }
            });
        console.log(data);
        toast.success(data.message, {
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
    } catch (error) {
        console.error(error);
        toast.error("Failed to add to wishlist", {
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
}
