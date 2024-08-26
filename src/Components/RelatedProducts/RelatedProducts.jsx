import { Link } from "react-router-dom";
import Slider from "react-slick";


export default function RelatedProducts({ relatedProducts }) {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        
    };


    return (
        <div className="mt-16 w-full overflow-hidden">
            <div style={{ color: 'var(--text-color-title)' }} className='text-3xl font-bold mb-7 overflow-hidden '>More Products</div>
            <div className=" mt-7  style={{ color: 'var(--text-color-title)' }} ">
                <Slider {...settings}>
                    {relatedProducts?.map((relProduct) => {
                        return <>
                            <div className="md:w-full  rounded overflow-hidden shadow-lg">
                                <div className=" w-full  flex justify-center items-center">
                                    <Link to={'/productDetails/' + relProduct._id} >
                                        <div className=" w-24 h-28 md:w-52 md:h-36  xl:w-72 xl:h-60 bg-cover  bg-center" style={{ "backgroundImage": `url(${relProduct.imageCover})` }}></div>
                                    </Link>
                                </div>
                                <div className="flex justify-between items-center mx-6 py-3">
                                    <Link to={'/productDetails/' + relProduct._id} >
                                        <h2 style={{ color: 'var(--text-color-title)' }} className='md:text-2xl text-sm font-bold line-clamp-1 '>{relProduct?.title}</h2>
                                    </Link>
                                    <p className='md:text-lg text-sm text-[#4fcf74] font-bold' >${relProduct?.price}</p>
                                </div>
                            </div>
                        </>
                    })}
                </Slider>
            </div>
        </div>
    )
}
