import { Link } from "react-router-dom";
import RatingStars from "../RatingStars/RatingStars";
import { addProductToCart } from "../../cartService";


export default function Product({ product }) {

    return (
        <div className="max-w-sm rounded card overflow-hidden shadow-sm hover:shadow-xl hover:shadow-green-400  shadow-green-400 transition-all duration-300">
            <Link to={'/productdetails/' + product._id} >
                <img className="w-full  " src={product.imageCover} alt="Home in Countryside" />
            </Link>
            <div className="px-6 py-4">
                <Link to={'/productdetails/' + product._id} className="flex items-baseline">
                    <div style={{ color: 'var(--text-color-title)' }} className="font-bold text-xl mb-2 line-clamp-1">{product.title} </div>
                </Link>
                <p style={{ color: 'var(--text-color-pragraph)' }} className="mt-2   line-clamp-1">{product.description}</p>
                <div className="my-3 flex-col md:flex-row flex justify-between items-center">
                    <span style={{ color: 'var(--text-color-title)' }} className=" font-bold text-2xl">{product.price} egp</span>
                    <RatingStars rating={product.ratingsAverage} />
                </div>
                <div className=" flex-col md:flex-row flex justify-center mt-3 items-center">
                    <button onClick={() => addProductToCart(product._id)} className="learn-more"> Add To Cart
                    </button>
                </div>


            </div>
        </div>

    )
}
