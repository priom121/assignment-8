
const DonateCard = ({donate}) => {
 const {id,Image,Title,Category,Price,category_bg,card_bg,text_button_bg}= donate 
 return (
<div className="mt-20  mx-auto  ">
<div style={{backgroundColor:card_bg}} className="relative   grid grid-cols-1 lg:grid-cols-2 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={Image}
      alt="image"
      className="h-full w-full object-cover"
    />
{/* flex flex-1 lg:flex-row  w-full max-w-[48rem] */}
  </div>
  <div className="p-6">
    <h6 style={{color:text_button_bg}} className="mb-4 block font-sans text-base font-bold uppercase text-white leading-relaxed tracking-normal  antialiased">
     {Title}
    </h6>
    <h4 style={{color:category_bg}} className="mb-2 block font-sans text-2xl font-bold leading-snug text-white tracking-normal text-blue-gray-900 antialiased">
      {Category}
    </h4>
    <p style={{color:category_bg}} className="mb-8 block font-sans text-base  leading-relaxed font-bold text-white antialiased">
      {Price}
    </p>
    <a className="inline-block" href="#">
      <button style={{backgroundColor:text_button_bg}}
        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle text-white font-sans text-xs font-bold uppercase transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        View Details
      </button>
    </a>
  </div>
</div>                                                                                     
  </div>
);
};

export default DonateCard;