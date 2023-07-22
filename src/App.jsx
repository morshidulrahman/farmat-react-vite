import { useState } from "react";
import EssentialProduct from "./components/Home/Essentialproduct";
import FeatureBrands from "./components/Home/FeatureBrands";
import Healthydaly from "./components/Home/Healthydaly";
import Homecategory from "./components/Home/Homecategory";
import Homehero from "./components/Home/Homehero";
import Homeposter from "./components/Home/Homeposter";
import TodaysDeal from "./components/Home/TodaysDeal";

import { setBackgroundImage } from "./utils/helper";

function App() {
  const [state, setstate] = useState(false);
  return (
    <>
      <Homehero />
      <Homecategory />
      <FeatureBrands />
      <TodaysDeal />
      <Homeposter />
      <div
        className="py-5"
        style={setBackgroundImage(
          "https://demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2021/05/homepage-new-content-bg-scaled.jpg",
          {
            backgroundPosition: "bottom center",
            backgroundColor: "#f3f3f3",
            backgroundSize: "cover",
          }
        )}
      >
        <EssentialProduct />
        <Healthydaly />
      </div>
    </>
  );
}

export default App;
