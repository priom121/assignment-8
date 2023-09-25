import { useEffect, useState } from "react";


const Donation = () => {
     const [donation ,setDonation] = useState();
     useEffect(()=>{
          const donates = JSON.parse(localStorage.getItem('donation'));
          setDonation(donates)
     },[])
     console.log(donation);
 return (
 <div>
                                                                                       
 </div>
 );
};

export default Donation;