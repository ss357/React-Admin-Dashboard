import { useEffect, useState } from "react";
import BarChartBox from "../../Components/BarChartBox/BarChartBox";
import BigChartBox from "../../Components/BigChartBox/BigChartBox";
import ChartBox from "../../Components/ChartBox/ChartBox";
import PieChartBox from "../../Components/PieChartBox/PieChartBox";
import TopBox from "../../Components/topBox/TopBox";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../Data/Data";
import "./Home.scss";
import Spinner from "../../Components/Spinner";


const Home = () => {

const[isLoaded, setIsLoaded]= useState(false);


useEffect(()=>{
setTimeout(()=> setIsLoaded(true), 3000);


},[])


  return (


    <div className="home">
      {!isLoaded ? <Spinner/> : <> <div className="box box1">
        {" "}
        <TopBox />
      </div>
      <div className="box box2">
        {" "}
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        {" "}
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4"> <PieChartBox/></div>
      <div className="box box5">
        {" "}
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box6">
        {" "}
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box7"> <BigChartBox/></div>
      <div className="box box8">
        {" "}
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        {" "}
        <BarChartBox {...barChartBoxRevenue} />
      </div> </> }
      
    </div>
  );
};

export default Home;
