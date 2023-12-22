import { useState, useEffect } from "react";
import { FeatureSlideData } from "./FeatureSlideData";
// import React from "react";
// import Slider from "react-slick";
export const FeatureSlider = () => {
  const [slider, setChangeSlider] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setChangeSlider((prevSlider) =>
        prevSlider === FeatureSlideData.length - 1 ? 0 : prevSlider + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  // var settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   fade:false,
  //   arrows:true
  // };

  return (
    <>
      {/* <Slider {...settings} className="flex"> */}
      <div className="flex gap-5 mt-[21px] ml-[19px]">
        {FeatureSlideData.map((item, index) => (
          <div
            key={item.id}
            className={`w-[120px] flex flex-col justify-center items-center border shadow-sm rounded-lg bg-slate-100   hover:shadow-md hover:transform hover:scale-110 hover:transition-transform hover:duration-500  ${
              index === slider
                ? "border-green-500 transform scale-110 transition-transform duration-500 "
                : ""
            }`}
          >
            {/* //   <div
      //   key={item.id}
      //   className="w-[120px] flex flex-col justify-center items-center border shadow-sm rounded-lg bg-slate-100 
      //     "
        
       
      // > */}
            <img src={item.url} alt="" />
            <p className="mb-[18px] cursor-pointer hover:text-green-500">
              {item.name}
            </p>
          </div>
        ))}
      </div>
      {/* </Slider> */}

      <div className="grid grid-cols-3 mt-14 ml-5">
        <div className="w-[488px] h-[292px] border shadow-xl  rounded-[13px] hover:opacity-75 bg-cover bg-center relative">
          <img
            className="object-cover object-center w-full h-full rounded-[13px]"
            src="https://img.freepik.com/free-photo/red-whole-sliced-onion-fresh-onion-isolated-white-surface-with-clipping-path-sliced-red-onion-with-parsley-white_1150-44629.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697328000&semt=ais"
            alt=""
          />

          <div className="absolute top-[73px] right-[31px] text-[25px] font-bold">
            <h4>
              Everyday Fresh &
              <br />
              Clean with Our
              <br />
              Products
            </h4>
          </div>

          <div className="border absolute w-[92px] left-[269px] bottom-[60px] text-center bg-green-500 text-white h-[28px] hover:bg-orange-400 hover:w-[150px] rounded-lg">
            <button>Shop Now</button>
          </div>

        </div>

        <div className="w-[488px] h-[292px]  border shadow-xl rounded-[13px] hover:opacity-75  bg-center bg-cover relative">
          <img
            src="https://t3.ftcdn.net/jpg/02/72/24/76/360_F_272247623_GmzIc6nAHj7OAFlIRxVdiNkaRoGT3ZsA.jpg"
            className="object-cover w-full h-full rounded-[13px] "
            alt=""
          />

          <div className="absolute top-[73px] left-[24px] text-[25px] font-bold">
            <h4>
              Make Your BreakFast
              <br />
              Health & Easy
              <br />
            </h4>
          </div>

          <div className="border absolute w-[92px] left-[33px] bottom-[60px] text-center bg-green-500 text-white h-[28px] hover:bg-orange-400 hover:w-[150px] rounded-lg ">
            <button>Shop Now</button>
          </div>
        </div>

        <div className="w-[488px] h-[292px]  border shadow-xl rounded-[13px] hover:opacity-75  bg-center bg-cover relative ">
          <img
            src="https://www.tru-juice.com/wp-content/uploads/2021/07/tru-juice-new-banner.jpg "
            className="object-cover w-full h-full rounded-[13px] "
            alt=""
          />

        
            <div className="absolute top-[73px] left-[24px] text-[25px] font-bold">
              <h4 >
               The Best Organic
                <br />
               Product Online
                <br />
              </h4>
            </div>

            <div className="border absolute w-[92px] left-[33px] bottom-[60px] text-center bg-green-500 text-white h-[28px] hover:bg-orange-400 hover:w-[150px] rounded-lg">
            <button>Shop Now</button>
          </div>
         
        </div>
      </div>
    </>
  );
};
