import Slider from "react-slick";

export default function ProductImgSlider({images}) {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className=" sm:w-96 w-80 text-center mx-auto text-zinc-50 mb-20 md:mb-5 px-11">
            <Slider {...settings}>
                {images?.map((img, index) => {
                    return <img key={index} src={img} alt="Product" className="w-full mx-auto object-contain rounded-lg shadow-md mb-4" id="mainImage" />
                })}
            </Slider>
        </div>
    )
}
