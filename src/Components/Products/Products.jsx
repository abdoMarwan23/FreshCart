import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet";
import Product from "../product/Product";
import LoadingScrean from "../LoadingScrean/LoadingScrean";


export default function Products() {

    function getProducts() {
        return axios.get("https://ecommerce.routemisr.com/api/v1/products");
    }


    let { data, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: getProducts,
        refetchOnWindowFocus: true,
        refetchOnReconnect: true,
        gcTime: 3000
    })


    return (
        <>
            <Helmet>
                <title>Products</title>
            </Helmet>
            {isLoading ? <LoadingScrean /> :
                <div className="  mb-8 px-9 sm:px-20 xl:pl-20 gap-3  mt-16 gap-y-9 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {data?.data.data.map((product, i) => {
                        return <Product product={product} key={i} />
                    })}
                </div>}
        </>
    )
}