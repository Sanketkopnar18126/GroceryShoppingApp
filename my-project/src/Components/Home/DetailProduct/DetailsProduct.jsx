import { useEffect, useState } from "react";
import { BiCart } from "react-icons/bi";
export const DetailsProduct = () => {
  const [detailProduct, setDetailProduct] = useState();

  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem("key")) || [];
    setDetailProduct(storeData);
    // console.log("storeData", storeData);
  }, []);
  return (
    <>
   
      <div>
        {detailProduct &&
          detailProduct.map((items) => (
            <div key={items.id} className="flex ml-[73px] mt-[55px] gap-[59px] ">
              <div className="w-[40%] h-[550px] border shadow-md rounded-xl   ">
               
                  <img className="w-full h-full" src={items.image} alt="" />
               
              </div>

              <div className=" w-[50%]  mt-10 flex flex-col gap-5">
                <div className="text-xl font-semibold">{items.title}</div>

                <div className="flex items-center ml-[2px]">
                  <svg
                    className="w-4 h-4 text-yellow-400 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-400 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-400 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-400 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>

                  <div className="ml-3 text-sm">
                    <p>( 64 reviews )</p>
                  </div>
                </div>

                <div className="text-lg font-normal">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Soluta adipisci, dolorum, labore cupiditate reiciendis, veniam
                  accusamus quia vero cum porro quidem perferendis deleniti
                  officia odit temporibus sunt autem alias nulla?
                </div>

                <div className="flex items-center gap-3 ">
                  <p className="text-[40px] font-bold mt-5">${items.price}</p>
                  <p className="line-through text-[18px] mt-[27px] text-gray-400">
                    ${items.oldprice}
                  </p>
                </div>

                <div className="mb-[41px] mt-5 flex gap-[70px]">
                  <button className="border shadow-md h-[4rem] w-[208px] flex justify-center items-center gap-2 text-xl hover:bg-green-300">
                    <BiCart />
                    Add To Cart
                  </button>

                  <button className="border shadow-md h-[4rem] w-[208px] text-xl hover:bg-green-300 ">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
