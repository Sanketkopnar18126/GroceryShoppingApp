import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { BiCart } from "react-icons/bi";

import { FetchPro } from "/../EcomApp/my-project/src/Slice/DetailProduct.js";
import { setLocal } from "../../../Slice/AddDetails";
import  { addCart } from "../../../Slice/Cart";

import {  toast } from 'react-toastify';


export const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  // const[data,setData]=useState()
  const dispatch = useDispatch();

  const select = useSelector((state) => state.productDatas.data);
  // console.log(select)

  const onSaveLocalStrg = (data) => {
    dispatch(setLocal(data));
    localStorage.setItem("key", JSON.stringify([data]));
    // setData(data)
  };
  // console.log("data",data)
  useEffect(() => {
    dispatch(FetchPro());
  }, [dispatch]);

  const onMilkDairies = () => {
    const data = select.data.filter(
      (items) => items.category === "Milk" || items.category == "Ice-Cream"
    );
    // console.log("data",data)
    setFilteredProducts(data);
    // console.log("filteredProducts",filteredProducts)
  };

  const onAll = () => {
    setFilteredProducts(select.data);
    // console.log("filteredProducts",filteredProducts)
  };

  const onVagetables = () => {
    const data = select.data.filter((items) => items.category === "Vagetables");
    setFilteredProducts(data);
    // console.log("filteredProducts",filteredProducts)
  };

  const onFruits = () => {
    const data = select.data.filter((items) => items.category === "Fruits");
    setFilteredProducts(data);
    // console.log("filteredProducts",filteredProducts)
  };

  const onMeats = () => {
    const data = select.data.filter((items) => items.category === "Meats");
    setFilteredProducts(data);
    // console.log("filteredProducts",filteredProducts)
  };

  const onCoffeTea = () => {
    const data = select.data.filter((items) => items.category === "Tea");
    setFilteredProducts(data);
    // console.log("filteredProducts",filteredProducts)
  };




const onCartSaveLocal=(data)=>{
  dispatch(addCart(data));
  toast.success('Succsessfully item added !....', {
    position: 'top-right',
    autoClose: 2000, // milliseconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,

    style:{
      top:"4em",
      right:"3em"
    }
  })

  localStorage.setItem(data.id, JSON.stringify(data))


}


  
  return (
    <>
      <div className="flex justify-between items-center  mt-12 ">
        <h1 className="text-[25px] ml-4">Products</h1>

        <div>
          <ul className="flex mr-8 text-lg gap-7 ">
            <Link is>
              <button className="hover:text-green-500 " onClick={onAll}>
                All
              </button>
            </Link>
            <Link>
              <button className="hover:text-green-500 " onClick={onMilkDairies}>
                Milks & Dairies
              </button>
            </Link>
            <Link>
              <button className="hover:text-green-500" onClick={onCoffeTea}>
                Coffes & Teas
              </button>
            </Link>
            <Link>
              <button className="hover:text-green-500" onClick={onMeats}>
                Meats
              </button>
            </Link>
            <Link>
              <button className="hover:text-green-500" onClick={onVagetables}>
                Vagetables
              </button>
            </Link>
            <Link>
              <button className="hover:text-green-500" onClick={onFruits}>
                Fruits
              </button>
            </Link>
          </ul>
        </div>
      </div>

      <div
        className="grid grid-cols-5 mt-16 ml-10 mr-3  "
        style={{ rowGap: "42px" }}
      >
        {filteredProducts &&
          filteredProducts.map((items) => (
            <div key={items.id}>
            
            <div
          
              className="rounded border shadow-md w-[262px]  flex flex-col gap-2  "
            >
              <NavLink to={"/detailsproduct"}>
                <div className="flex justify-center">
                  <img
                    onClick={() => onSaveLocalStrg(items)}
                    className="h-[140px] w-[153px] hover:transform hover:scale-105 transition-transform duration-300 ease-in-out "
                    src={items.image}
                    alt=""
                  />
                </div>
              </NavLink>
              <div className="ml-[7px]">
                <p className="text-gray-500">{items.category}</p>
                <p className="text-xl font-semibold">
                  {items.title.substr(0, 23) + "..."}
                </p>
              </div>

              <div className="flex flex-col gap-5">
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
                    <p>(4.5)</p>
                  </div>
                </div>

                <div className="flex mt-4 items-center justify-between p-3">
                  <div className="flex items-center gap-2 ">
                    <p className="text-xl font-bold">${items.price}</p>
                    <p className="line-through text-gray-400">
                      ${items.oldprice}
                    </p>
                  </div>

                  <div className="border bg-gray-100 shadow-md text-green-700 p-1 gap-[7px] w-[106px] items-center rounded-md flex hover:bg-green-400 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
                    <BiCart />
                    <button
                      className="text-sm"
                      onClick={() =>onCartSaveLocal(items)}
                    >
                   
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            </div>
        
          ))}
      </div>

    </>
  );
};

// const fetchproduct = async () => {
//   try {
//     const res = await fetch("http://localhost:3001/products");
//     const data = await res.json();
//     setproducts(data);
//     // console.log("data",data)
//     console.log("products",products.data)
//   } catch (error) {
//     console.log(error);
//   }
// };
// fetchproduct();
