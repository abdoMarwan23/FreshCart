import { Link } from "react-router-dom";
import RatingStars from "../RatingStars/RatingStars";
import { addProductToCart } from "../../cartService";


export default function Product({ product }) {

    return (
        <div className="max-w-sm rounded card overflow-hidden shadow-lg">
            <Link to={'/productdetails/' + product._id} >
                <img className="w-full  " src={product.imageCover} alt="Home in Countryside" />
            </Link>
            <div className="px-6 py-4">
                <Link to={'/productdetails/' + product._id} className="flex items-baseline">
                    <div style={{color: 'var(--text-color-title)' }}  className="font-bold text-xl mb-2 line-clamp-1">{product.title} </div>
                </Link>
                <p style={{ color: 'var(--text-color-pragraph)' }} className="mt-2   line-clamp-1">{product.description}</p>
                <div className="my-3 flex-col md:flex-row flex justify-between items-center">
                    <span style={{ color: 'var(--text-color-title)' }} className=" font-bold text-2xl">{product.price} egp</span>
                    <RatingStars rating={product.ratingsAverage} />
                </div>
                <div className="mt-2 flex-col md:flex-row flex justify-center mt-3 items-center">
                    <button onClick={() => addProductToCart(product._id)} className="flex items-center justify-center rounded-md bg-[#359751] text-white hover:bg-[#289045]  px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200" >Add To Cart</button>
                </div>

            </div>
        </div>

    )
}
