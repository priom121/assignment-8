import { useEffect, useState } from "react";
import DonateCard from "./DonateCard";


const Donation = () => {
     const [donation ,setDonation] = useState([]);
     const [show ,setShow] =useState(false)
     useEffect(()=>{
          const donates = JSON.parse(localStorage.getItem('donation'));
               setDonation(donates)
     },[])
     // console.log(donation);
     // console.log(show);
 return (
 <div  >
   <div className="grid grid-cols-2 gap-5">
   {
     show ? donation.map(donate=><DonateCard key={donate.id} donate={donate}></DonateCard>) 
     : donation.slice(0,4).map(donate=><DonateCard key={donate.id} donate={donate}></DonateCard>)

          // donation.map(donate=><DonateCard key={donate.id} donate={donate}></DonateCard>)
     } 
   </div>
 
     <button onClick={()=>setShow(!show)} className= "px-3 py-3 block mx-auto rounded mt-5 bg-green-500">
          Show more</button>
                                                                                
 </div>
 );
};

export default Donation;