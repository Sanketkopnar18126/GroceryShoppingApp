import { FooterData } from "../../Data/FooterData";
import { DiGithubBadge } from "react-icons/di";
import { TfiTwitterAlt } from "react-icons/tfi";
import { TfiInstagram } from "react-icons/tfi";
export const Footer = () => {
  return (
    // bg-[#172337]
    <>
      <div className="w-[100%] mt-[119px] flex flex-col gap-[70px] bg-[#172337] text-white  ">
        <div>
          <img
            className="w-[100%] h-[445px]"
            src="https://mindstacktechnologies.com/wordpress/wp-content/uploads/2018/01/ecommerce-banner.jpg"
            alt=""
          />
        </div>

        <div className="flex">
          <div className="ml-[15px] flex flex-col gap-4">
            <h1 className="text-[23px]"> Install App</h1>
            <div className="w-[150px]">
              <img
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/app-store.jpg"
                alt=""
              />
            </div>
            <div className="w-[150px]">
              <img
                src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/google-play.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="flex justify-evenly w-[90%]">
            {FooterData.map((items, index) => (
              <div key={index}>
                <p className="text-2xl">{items.name}</p>
                <ul className="mt-2 flex flex-col gap-3">
                  {items.items.map((items, index) => (
                    <li key={index}>{items}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex border-t shadow-lg justify-around items-center h-[114px]">
          <div>
            <p>My Store @2023 All rights reserved</p>
          </div>

          <div>
            <img
              src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/payment-method.png"
              alt=""
            />
          </div>

          <div className="flex gap-6 items-center">
            <p>Follow Us</p>

            <div className="flex items-center gap-5">
              <div className="rounded-[50%] bg-black/20 h-[40px] w-[40px] flex justify-center items-center ">
                <DiGithubBadge className="w-[48px] h-[36px]" />
              </div>

              <div className="rounded-[50%] bg-black/20 h-[40px] w-[40px]  flex justify-center items-center ">
                <TfiTwitterAlt className="w-[22px] h-[36px]" />
              </div>

              <div className="rounded-[50%] bg-black/20 h-[40px] w-[40px]  flex justify-center items-center ">
                <TfiInstagram className="w-[22px] h-[36px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
