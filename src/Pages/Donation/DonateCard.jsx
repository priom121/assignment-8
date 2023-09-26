
const DonateCard = ({donate}) => {
 const {id,Image,Title,Category,Price}= donate 
 return (
<div className="mt-20 ">
<div className="relative flex flex-1 lg:flex-row w-full max-w-[48rem]  rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={Image}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <h6 className="mb-4 block font-sans text-base font-bold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
     {Title}
    </h6>
    <h4 className="mb-2 block font-sans text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {Category}
    </h4>
    <p className="mb-8 block font-sans text-base  leading-relaxed text-gray-700 font-bold antialiased">
      {Price}
    </p>
    <a className="inline-block" href="#">
      <button
        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
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