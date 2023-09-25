
const OneCard = ({cards}) => {
 const {id,Image, Category, Price,Description } =cards
return (
<div className="flex mt-5 justify-center items-center h-[70vh]">
<div className="card mt-32 card-compact w-3/4 bg-base-100 shadow-xl">
  <figure><img className="w-full relative " src={Image} alt="Shoes" /> </figure>
  <button className="btn absolute  mt-[180px] md:mt-[290px] lg:mt-[580px] bg-red-500 text-base lg:text-xl text-white  w-1/6">Donate {Price}</button>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold">{Category}</h2>
    <p className="text-xl font-medium">{Description}</p>
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div>                                                                                 
  </div>
);
};

export default OneCard;