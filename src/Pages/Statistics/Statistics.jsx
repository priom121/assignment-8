import { useEffect } from "react";
import { useState } from "react";
import Chart from "react-google-charts";


const Statistics = () => {
    const [pie , setPie] =useState([]);
    useEffect(()=>{
        const donates = JSON.parse(localStorage.getItem('donation'));
        setPie(donates)
    },[])
    const totalDonation = 12 - pie.length ;
    const yourDonation = pie.length
    return (
        <div className="flex  justify-center items-center h-[80vh]">
            <Chart  chartType="PieChart" width={"100%"}
      height={"500px"} data={[
        ["donate" , "value"],
        ["Total Donation" , totalDonation],
        ["Your Donation" , yourDonation]
      ]} >
            </Chart>
        </div>
    );
};

export default Statistics;