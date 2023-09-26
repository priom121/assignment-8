import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const OneCard = ({cards}) => {
 const {id,Image, Category, Price,Description ,text_button_bg } =cards;

const handleClick =()=>{
  toast('You have successfully donate')
  const AddDonation = [];

  const donates = JSON.parse(localStorage.getItem('donation'));
  if(!donates){
    AddDonation.push(cards)
    localStorage.setItem('donation',JSON.stringify(AddDonation));
  }
  else{
    AddDonation.push(...donates,cards)
    localStorage.setItem('donation',JSON.stringify(AddDonation));
  }
}

return (
<div className="flex mt-5 justify-center items-center h-[70vh]">
<div className="card lg:mt-52 card-compact w-3/4 bg-base-100 shadow-xl">
  <figure><img className="w-full relative " src={Image} alt="Shoes" /> </figure>
  {/* <button style={{backgroundColor:text_button_bg}} onClick={handleClick}
   className="btn absolute mt-[180px] md:mt-[290px] lg:mt-[580px]  bg-red-500 text-base lg:text-xl text-white  w-1/6">
    Donate {Price}</button> */}
    <div className='bg-[#0B0B0B80] p-7 md:p-20 lg:p-20 lg:mt-[560px]
     mt-[180px] md:mt-[235px] absolute w-full shadow-xl'></div>
     <div>
     <button style={{backgroundColor:text_button_bg}} onClick={handleClick}
   className="btn absolute -mt-[50px] md:-mt-[55px] lg:-mt-[80px]  bg-red-500 text-base lg:text-xl text-white  w-1/6">
    Donate {Price}</button>   

     </div>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold">{Category}</h2>
    <p className="text-xl font-medium">{Description}</p>
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div> 
<ToastContainer />                                                                                
  </div>
);
};

export default OneCard;