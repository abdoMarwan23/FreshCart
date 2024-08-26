import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";


export default function Orders() {

    let [products, setProducts] = useState('');
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getAllProducts()
    }, [])

    async function getAllProducts() {
        setIsLoading(true)
        let { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/orders")
        console.log(data.data);
        setProducts(data.data);
        setIsLoading(false)
    }



    return (
        <>
            <Helmet>
                <title>Orders</title>
            </Helmet>
            <div className="h-screen">
                <h1>Orders</h1>
            </div>
            
        </>
    )
}
