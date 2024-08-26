import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet";
import LoadingScrean from "../LoadingScrean/LoadingScrean";
import { Link } from "react-router-dom";


export default function Brand() {



    function getAllBrands() {
        return axios.get("https://ecommerce.routemisr.com/api/v1/brands")
    }


    let { data, isLoading } = useQuery({
        queryKey: ['brands'],
        queryFn: getAllBrands,
        gcTime: 3000
    })

    // console.log(data.data.data);

    return (
        <>
            <Helmet>
                <title>Brand</title>
            </Helmet>
            {isLoading ? <LoadingScrean /> :
                <div className="grid xl:grid-cols-3 sm:pl-11 px-5 grid-cols-1  md:grid-cols-2 gap-y-9 md:gap-y-5 gap-3 py-5">
                    {data?.data?.data?.map((brand, i) => {
                        return <div className="" key={i}>
                            <div className="max-w-sm rounded text-center overflow-hidden shadow-xl">
                                <Link to={'/brandDetails/' + brand._id} >
                                    <img className="w-full " src={brand.image} alt="Home in Countryside" />
                                </Link>
                                <div className="px-6 py-4">
                                    <div style={{ color: 'var(--text-color-title)' }} className="font-bold text-xl mb-2 line-clamp-1 ">{brand.name} </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>}
        </>
    )
}