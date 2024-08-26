import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet";
import LoadingScrean from "../LoadingScrean/LoadingScrean";
import { Link } from "react-router-dom";


export default function Catigories() {


    function getAllCatigories() {
        return axios.get("https://ecommerce.routemisr.com/api/v1/categories")
    }


    let { data, isLoading } = useQuery({
        queryKey: ['brands'],
        queryFn: getAllCatigories,
        gcTime: 3000
    })

    console.log(data?.data?.data);



    return (
        <>
            <Helmet>
                <title>Catigories</title>
            </Helmet>
            {isLoading ? <LoadingScrean /> :
                <div className="grid grid-cols-1 sm:pl-32  md:pl-11 md:grid-cols-2 px-5 gap-y-4 py-6 xl:grid-cols-3 gap-3 ">
                    {data?.data?.data.map((catigory, i) => {
                        return <div className="" key={i}>
                            <div className="max-w-sm  rounded text-center overflow-hidden shadow-xl">
                                <Link to={'/catigoryDetails/' + catigory._id} >
                                    <img className="w-full h-72 " src={catigory.image} alt="Home in Countryside" />
                                </Link>
                                <div className="px-6 py-4">
                                    <div style={{ color: 'var(--text-color-title)' }} className="font-bold text-xl mb-2 line-clamp-1 ">{catigory.name} </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>}
        </>
    )
}