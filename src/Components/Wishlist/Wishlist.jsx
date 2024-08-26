// import axios from "axios"

import axios from "axios"
import LoadingScrean from "../LoadingScrean/LoadingScrean"
import { Helmet } from "react-helmet"
import { Link } from "react-router-dom"
import WishListDetails from "../WishListDetails/WishListDetails"
import { useEffect, useState } from "react"


export default function Wishlist() {
  

  const [isLoading, setIsLoading] = useState(true)
  const [wishList, setWishList] = useState(null)


  useEffect(() => {
    getUserWishList();
  }, [])
  

  async function getUserWishList() {
    setIsLoading(true)
    let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/wishlist', {
      headers: {
        token: localStorage.getItem("token")
      }
    }).finally(() => {
      setIsLoading(false);
  })
    // setIsLoading(false)
    setWishList(data);
    console.log(data.data)
}

  // setWishList(data)


  if (wishList?.count == 0) {
    setWishList(null)
  }

  return(
    <>
      <Helmet>
        <title>wishlist</title>
      </Helmet>
      {isLoading ? <LoadingScrean /> :
        wishList ? <div className="container mx-auto mt-10">
          <div className="sm:flex shadow-md my-10">
            <div className="  w-full  sm:w-3/4  px-10 py-10">
              <div style={{ color: 'var(--text-color-title)' }}  className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">wish list</h1>
                <h2 className="font-semibold text-2xl">{wishList?.count}</h2>
              </div>
              {wishList?.data?.map((product, index) => {
                return <>
                  <WishListDetails key={index} product={product} setWishList={setWishList} isLoading={isLoading} setIsLoading={setIsLoading} />
                </>
              })}
              <Link to={'/'} className="flex font-semibold  text-[#359751] hover:text-[#289045] text-sm mt-10">
                <svg className="fill-current mr-2  text-[#359751] hover:text-[#289045] w-4" viewBox="0 0 448 512">
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </Link>
            </div>
          </div>
        </div> : <h1 className="text-4xl font-bold text-center h-96 mx-auto my-7">there is no items in your wishList</h1>
      }
    </>
  )
}
