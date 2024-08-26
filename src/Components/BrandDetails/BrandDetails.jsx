import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import LoadingScrean from "../LoadingScrean/LoadingScrean";


export default function BrandDetails() {


    let { id } = useParams();

    function getBrandDetails() {
        return axios.get("https://ecommerce.routemisr.com/api/v1/brands/" + id)
    }


    let { data, isLoading } = useQuery({
        queryKey: ['brandDetails'],
        queryFn: getBrandDetails,
        gcTime: 3000
    })
    console.log(data?.data?.data);


    return (
        <>
            {isLoading ? <LoadingScrean /> :
                <div className="card border-none  h-lvh">
                    <div className="container mx-auto px-4 py-8 flex justify-center items-center ">
                        <div className="flex flex-wrap  justify-center items-center   mx-auto">
                            <div className="w-full flex flex-col mt-4 justify-center items-center md:w-9/12 px-4">
                                <h2 style={{ color: 'var(--text-color-title)' }} className="text-3xl font-bold mb-2">{data?.data?.data?.name}</h2>
                                <p style={{ color: 'var(--text-color-pragraph)' }} className="text-zinc-300 mb-4">SKU: WH1000XM4</p>
                                <div className="w-96">
                                    <img src={data?.data?.data?.image} alt="" className="w-96" />
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}
