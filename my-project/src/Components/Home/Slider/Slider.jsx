import { useEffect, useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

export const Slider = () => {
  const img = [
    {
      url: "https://cdn.modernbazaar.online/assets/uploads/category/compress/Subcat_banner_fruits_Vegetable_low.jpg", //1
    },
    {
      url: "https://cdn.modernbazaar.online/assets/uploads/category/compress/Meat_Eggs__SubcatBanner.jpg",//3
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQphBZkrMFXAPCTZHg52IbVg-DyMvm6DU7nQ&usqp=CAU",//4
    },
    {
      url: "https://populationmatters.org/wp-content/uploads/2022/08/fruits-and-vegetables-banner.jpg",  //2
    },
  ];

const [changeSlide,setSlide]=useState(0)

const handleNext=()=>{

setSlide((prev)=>(prev+1) % img.length)
}


const handleLeft=()=>{

  setSlide((prev)=>(prev-1+img.length)%img.length)
}


useEffect(()=>{
  const time= setInterval(() => {
    // setSlide((prev)=>(prev+1)%img.length)
    handleNext()
  }, 5000);
  return ()=>clearInterval(time)
},[changeSlide])
  return (
    <>
   
      <div className="w-[100%] pt-[26px] px-[17px]   relative  group ">
        <div
          className="w-[100%] h-[483px] rounded-2xl bg-center duration-500 bg-cover group-hover:opacity-80"
          style={{ backgroundImage: `url(${img[changeSlide].url})` }}
        ></div>

        {/* Left */}
        <div className="  hidden group-hover:block   absolute top-[50%]  left-[3.25rem] rounded-full text-white cursor-pointer bg-black/20 p-2">
          <GoChevronLeft onClick={handleLeft}  size={30}/>
        </div>
        <div className=" hidden group-hover:block   absolute top-[50%] translate-x-0 translate-y-[-50%] right-[3.25rem] rounded-full text-white cursor-pointer bg-black/20 p-2">
          <GoChevronRight onClick={handleNext}  size={30} />
        </div>
      </div>
    </>
  );
};
