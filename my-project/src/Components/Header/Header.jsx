import { NavLink } from "react-router-dom";

import { GrFavorite } from "react-icons/gr";
import { BsBag } from "react-icons/bs";
import { GrUser } from "react-icons/gr";
import { useEffect, useState } from "react";
import { VscHeart } from "react-icons/vsc";
import { GrPerformance } from "react-icons/gr";
import { HiMiniArrowRightOnRectangle } from "react-icons/hi2";
import { GrMapLocation } from "react-icons/gr";
import { GoChevronDown } from "react-icons/go";

import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { MegaData } from "../../Data/MegaData";

import { getAuth, signOut } from "firebase/auth";
import { app } from "../../Firebase/Firebase";
import { toast } from "react-toastify";

import { onAuthStateChanged } from "firebase/auth";
export const Header = () => {
  const [names, setname] = useState();
  const [myaccount, setMyaccount] = useState(false);

  // const select

  const auth = getAuth(app);

  const onSignOut = () => {
    signOut(auth)
      .then(() => {
        // localStorage.removeItem("User");

        // window.location.href = '/';
        toast.success(" Successfully sign out !", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setname("");
      })
      .catch((error) => {
        console.log(error);
      });
  };




  useEffect(() => {
    console.log("Hellow")
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        const uid = user.displayName;
        console.log("uid", uid);

        setname(uid);
      }
    });
  }, []);






  return (
    <>
      <nav className="bg-white border-gray-200">
        <div className=" flex  items-center justify-evenly mx-auto p-4 mr-[32px]">
          <NavLink
            to={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
              My Bazar
            </span>
          </NavLink>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Dropdown */}

          <div
            className="flex bg-white gap-4  h-12 w-[500px] shadow-md rounded-lg"
           style={{border:"1px solid black"}}
          >
            
              <div className="relative  flex p-[2px] flex-wrap items-stretch w-[487px]">
                <input
                  type="search"
                  className="relative m-0 -mr-0.5 block min-w-0 flex-auto border-none outline-none p-[7px]  w-[236px] text-black "
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon1"
                />

                <button
                  className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                  type="button"
                  id="button-addon1"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
          
          </div>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ClickAwayListener onClickAway={() => setMyaccount(false)}>
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700 ">
                <li>
                  {names ? (
                    <p className="text-black">
                      Welcome <br />
                      {names}
                    </p>
                  ) : (
                    <NavLink
                      to={"/login"}
                      className="py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent flex items-center gap-1"
                      aria-current="page"
                    >
                      Login
                    </NavLink>
                  )}
                </li>

                <li >
                  <NavLink
                    to={"/whishlist"}
                    className=" py-2 px-3  text-black bg-blue-700 rounded md:bg-transparent  flex items-center gap-1"
                    aria-current="page"
                  >
                    <GrFavorite />
                    Whishlist
                  </NavLink>
                </li>

                <li > 
                  <NavLink
                    to={"/cart"}
                    className=" py-2 px-3  text-black bg-blue-700 rounded md:bg-transparent  flex items-center gap-1"
                    aria-current="page"
                  >
                    <BsBag />
                    Cart
                  </NavLink>
                </li>

                <li className="text-black">
                  <NavLink
                    onClick={() => setMyaccount(!myaccount)}
                    to={"/"}
                    className="py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent flex items-center gap-1"
                    aria-current="page"
                  >
                    <GrUser />
                    My Account
                  </NavLink>

                  {myaccount && (
                    <ul className="text-gray-500 absolute right-[80px] z-10 mt-2 w-48 bg-black rounded-md overflow-hidden shadow-lg">
                      {names ? (
                        <>
                          <li className="flex items-center ml-[8px]">
                            <GrUser />
                            <button className="block px-4 py-2 hover:bg-gray-700">
                              My Account
                            </button>
                          </li>

                          <li className="flex items-center ml-[8px]">
                            <GrMapLocation />
                            <button className="block px-4 py-2 hover:bg-gray-700">
                              Order Tracking
                            </button>
                          </li>
                          <li className="flex items-center ml-[8px]">
                            <VscHeart />
                            <button className="block px-4 py-2 hover:bg-gray-700">
                              My Wishlist
                            </button>
                          </li>
                          <li className="flex items-center ml-[8px]">
                            <GrPerformance />
                            <button className="block px-4 py-2 hover:bg-gray-700">
                              Settings
                            </button>
                          </li>
                          <li className="flex items-center ml-[8px]">
                            <HiMiniArrowRightOnRectangle />
                            <button
                              className="block px-4 py-2 hover:bg-gray-700"
                              onClick={onSignOut}
                            >
                              Sign Out
                            </button>
                          </li>
                        </>
                      ) : (
                      <div>
                        <NavLink to={'/signup'}>
                          <button
                            type="button"
                            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                          >
                           Sign Up
                          </button>
                        </NavLink>

                             <NavLink to={'/login'}>
                          <button
                            type="button"
                            className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                          >
                          Log In
                          </button>
                        </NavLink>
                        </div>
                      )}
                    </ul>
                  )}
                </li>
              </ul>
            </ClickAwayListener>
          </div>
        </div>

        <div className="flex items-center justify-evenly bg-white h-14  border border-t-gray-300 ">
          <div>
            <button className="text-black border border-black h-[31px] w-[192px] p-[1px] bg-green-400 flex justify-center items-center gap-[5px] ">
              Browse All Categories
              <GoChevronDown className="mt-1" />
            </button>
          </div>

          <div>
            <ul className="flex gap-8 items-center ">
              <li className="mr-2">Deals</li>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/shop"}>Shop</NavLink>
              </li>
              <li>
                <NavLink to={"/vendors"}>Vendors</NavLink>
              </li>

              <li className="group">
                <NavLink to={"/megamenue"}>Mega Menu</NavLink>
                {/* Uncomment the following line if needed */}
                <div className="hidden group-hover:block">
                  <div className="border shadow-md absolute top-[135px] w-[100%] left-0 h-[372px]  flex gap-8 ">
                    <div className="flex mt-7">
                      {MegaData.map((data, index) => (
                        <div key={index} className="ml-[100px] text-sm mt-2">
                          <p className="text-[21px] cursor-pointer mb-[38px] text-green-500 hover:text-yellow-400 ">
                            {" "}
                            {data.category}
                          </p>
                          <ul className="flex flex-col text-[17px] gap-[18px] ">
                            {data.items.map((name, subIndex) => (
                              <li
                                className=" cursor-pointer text-gray-700 hover:text-green-500"
                                key={subIndex}
                              >
                                {name}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      <div>
                        <img
                          className="w-[483px] h-[306px] ml-[193px]"
                          src="http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-menu.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <NavLink to={"/blogs"}>Blog</NavLink>
              </li>

              <li className="relative group">
                <NavLink
                  to={"/"}
                  className="group-hover:border-b-2 border-transparent px-2 py-1 inline-block"
                >
                  Pages
                </NavLink>

                <div className="hidden group-hover:block absolute bg-white border border-gray-300 rounded-md shadow-md mt-2">
                  <ul className="flex flex-col space-y-1 w-[150px] group-hover:block  ">
                    <li className="px-4 py-2 hover:bg-gray-100">About Us</li>
                    <li className="px-4 py-2 hover:bg-gray-100">Contact</li>
                    <li className="px-4 py-2 hover:bg-gray-100">My Account</li>
                    <li className="px-4 py-2 hover:bg-gray-100">Login</li>
                    <li className="px-4 py-2 hover:bg-gray-100">Register</li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      Forgot Password
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      Privacy Policy
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
