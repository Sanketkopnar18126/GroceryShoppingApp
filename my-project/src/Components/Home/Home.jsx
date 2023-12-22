
import { DailyBestSales } from "./DailyBestSales/DailyBestSales"
import { FeatureSlider } from "./FeaturedSlider/FeatureSlider"
import { Products } from "./Products/Products"
import { Slider } from "./Slider/Slider"

export const Home = () => {
  return (
    <>
 
   

<Slider/>

<div className="text-[25px] ml-2 mt-6">
  
<h1 className="ml-4">Featured Categories</h1>

</div>

<FeatureSlider/>
<Products/>
<DailyBestSales/>



    </>
  )
}
