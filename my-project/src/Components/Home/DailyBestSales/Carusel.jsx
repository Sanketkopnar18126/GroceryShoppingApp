import { useEffect, useState } from "react";
import { BiCart } from "react-icons/bi";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Slider from "react-slick";
import './style.css'
export const Carusel = () => {
  const [product, setproducts] = useState({});

  //     className={`rounded border shadow-md w-64 flex flex-col gap-2
  //     ${index === slide ? 'opacity-100 scale-105' : 'opacity-75 scale-100'}
  //   `}

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  useEffect(() => {
    const fetchproduct = async () => {
      const res = await fetch("http://localhost:3001/products");
      const data = await res.json();
      setproducts(data);
      // console.log(data);
      // console.log(product.data)
    };
    fetchproduct();
  }, []);

  const newData =
    product.data && product.data.filter((items) => items.producttype == "Sale");
  // console.log("newData,", newData && newData.length);

  return (
    <>
      <div className="ml-4 flex relative">
        <div className="z-30 absolute bottom-[-78px]">
          <img
            src="http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-4.png"
            className="rounded-xl w-[296px]"
            alt=""
          />
        </div>

        {newData && (
          <Slider {...settings} className="flex flex-col overflow-hidden">
            {newData &&
              newData.map((items, index) => (
                <div
                  key={items.id}
                  className="rounded-lg overflow-hidden border shadow-md  mx-4 flex flex-col gap-2  myname"
                >
                  <div className="product-img">
                    <img
                      className="h-[140px] w-[153px] hover:transform hover:scale-105 transition-transform duration-300 ease-in-out "
                      src={items.image}
                      alt=""
                    />
                  </div>

                  <div className="category">
                    <p className="text-gray-500">{items.category}</p>
                    <p className="text-xl font-semibold">
                      {items.title.substr(0, 23) + "..."}
                    </p>
                  </div>

                  <div className="flex flex-col gap-5">
                

                    <div className="flex items-center rating">
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
                        <p>(4.5)</p>
                      </div>
                    </div>

                    <div className="flex mt-4 items-center justify-between AddtoCart">


                      <div className="flex items-center gap-2 ">
                        <p className="text-xl font-bold">${items.price}</p>
                        <p className="line-through text-gray-400">
                          ${items.oldprice}
                        </p>
                      </div>


                      <div className="border bg-gray-100 shadow-md text-green-700 p-1 gap-[7px] w-[106px] items-center rounded-md flex hover:bg-green-400 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <BiCart />
                        <button className="text-sm">Add to Cart</button>
                      </div>


                    </div>


                  </div>


                </div>
              ))}
          </Slider>
        )}

        <div className="absolute left-[21.5rem] top-[110px] rounded-[50px]  bg-black/20 text-white  ">
          <GoChevronLeft className="text-[40px]" />
        </div>

        <div className="absolute  top-[110px] right-[45px] rounded-[50px]   bg-black/20 text-white  ">
          <GoChevronRight className="text-[40px]" />
        </div>
      </div>
    </>
  );
};
