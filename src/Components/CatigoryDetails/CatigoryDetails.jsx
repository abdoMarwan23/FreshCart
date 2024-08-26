import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import { useParams } from "react-router-dom"
import LoadingScrean from "../LoadingScrean/LoadingScrean";


export default function CatigoryDetails() {


    let { id } = useParams();

    function getCatigoryDetails() {
        return axios.get("https://ecommerce.routemisr.com/api/v1/categories/" + id)
    }


    let { data, isLoading } = useQuery({
        queryKey: ['catigoryDetails'],
        queryFn: getCatigoryDetails,
        gcTime: 3000
    })

    // console.log(data.data.data)

    return (
        <>
            {isLoading ? <LoadingScrean /> :
                <div className="">
                    <div className="container card border-none mx-auto px-4 py-8">
                        <div className="flex flex-wrap justify-center items-center mx-auto">
                            <div className="w-full flex flex-col justify-center items-center md:w-9/12 px-4">
                                <h2 style={{ color: 'var(--text-color-title)' }} className="text-3xl  font-bold mb-1">{data?.data?.data?.name}</h2>
                                <p style={{ color: 'var(--text-color-pragraph)' }} className=" text-sm mb-4">SKU: WH1000XM4</p>
                                <div className="w-72">
                                    <img src={data?.data?.data?.image} alt="" />
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}
