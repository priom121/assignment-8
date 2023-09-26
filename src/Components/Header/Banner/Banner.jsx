
const Banner = () => {
 return (
  <div className="h-[50vh] flex flex-col items-center justify-center bg-gray-100">
<h1 className= " text-xl font-medium md:text-3xl lg:text-6xl lg:font-bold">I Grow By 
Helping People In Need </h1> 
<div>
 <input className="h-10 mt-5 px-28 lg:px-40 rounded" type="text" placeholder="search here" />
 <button className="bg-red-500 px-5 py-2 rounded">search</button>
</div>


</div>
 )
}

export default Banner;