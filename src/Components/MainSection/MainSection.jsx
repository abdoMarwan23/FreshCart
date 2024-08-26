import img1 from '../../assets/d50019728623e8429b6cd74479088f9e.jpg'





export default function MainSection() {
    return (
        <div className="lg:h-screen h-full lg:pl-0 md:pl-24 pb-4 xl:py-0 md:py-11 px-2 mt-9  lg:mb-2 " >
            <div className="container ">
                <div className="flex justify-center items-center mx-auto lg:flex-row flex-col gap-y-6 gap-5">
                    <div className=" lg:block md:flex md:justify-center md:items-center md:flex-col md:flex-wrap">
                        <h1 style={{ color: 'var(--text-color-title)' }} className="text-4xl font-bold mb-5 sm:w-[32rem] md:text-center lg:text-left text-zinc-50" >DISCOVER FRESH SHOPPING EXPERIENCE</h1>
                        <p style={{ color: 'var(--text-color-pragraph)' }} className=" sm:w-96" >Welcome to FreshCart, your one-stop destination for all things fresh and delicious. Explore a wide range of high-quality products sourced directly from local producers to your doorstep. Embrace the freshness and convenience with FreshCart.</p>
                        <button className='flex items-center justify-center rounded-md bg-[#359751] text-white hover:bg-[#289045] mt-9 px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200' >Read More</button>
                    </div>
                    <div className="sm:w-80  xl:w-[32rem] rounded-lg">
                        <img className='rounded-xl h-[28rem] xl:h-[35rem] xl:w-auto  ' src={img1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
