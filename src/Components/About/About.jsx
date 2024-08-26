import teamPic from '../../assets/Team-scaled.jpg'

export default function About() {
    return (
        <>
            <div className="card border-none px-3 pb-5 lg:pl-11 lg:h-screen h-full  pt-7  ">
                <h1 style={{ color: 'var(--text-color-title)' }} className="text-5xl  font-bold  text-center mb-14 " >ABOUT US</h1>
                <div className="container lg:pl-0 md:pl-[7.75rem]">
                    <div className="text-center">
                        <h3 style={{ color: 'var(--text-color-title)' }} className=" text-2xl mb-2 font-semibold" >Who We Are</h3>
                        <p style={{ color: 'var(--text-color-pragraph)' }} className=" border-1 border-b border-zinc-600 pb-5 mb-5 mx-auto  sm:w-[32rem]" >At FreshCart, we are passionate about delivering the freshest produce and products to our customers. Our mission is to support local farmers and businesses while providing you with the best shopping experience. We are dedicated to quality, freshness, and customer satisfaction.</p>
                    </div>
                    <div className="flex items-center justify-center lg:flex-row flex-col pt-9 gap-y-3 ">
                        <div className=" sm:w-80 xl:w-[32rem] ">
                            <img className="" src={teamPic} alt="" />
                        </div>
                        <div className=" lg:pl-16 lg:text-left  text-center lg:mx-0 mx-auto">
                            <p style={{ color: 'var(--text-color-title)' }} className=" pt-2 sm:w-[32rem]" >With a commitment to sustainability and community, FreshCart ensures that every purchase you make contributes to a greener future. We prioritize transparency and ethical sourcing, so you can shop with confidence knowing you're making a positive impact.</p>
                            <button className='flex items-center  justify-center mx-auto rounded-md bg-[#359751] text-white hover:bg-[#289045] mt-5 px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200' >Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
