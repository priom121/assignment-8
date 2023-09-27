import { useEffect, useState } from "react";

const Banner = ({cards}) => {
  console.log(cards);
  // const [search , setSearch] =useState([])
  // useEffect(()=>{
     
  // },[])
  const handleFrom = e =>{
    e.preventDefault()
  console.log(e.target.name.value);
  }
 return (
  <div className="h-[50vh] flex flex-col items-center justify-center bg-gray-100">
<h1 className= " text-xl font-medium md:text-3xl lg:text-6xl lg:font-bold">I Grow By 
Helping People In Need </h1> 
<div>
  <form onSubmit={handleFrom}>
 <input  className="h-10 mt-5 px-18 md:px-24 lg:px-40 rounded" type="text" name="name" placeholder="search here" />
 <button className="bg-red-500 px-5 py-2 rounded">search</button>
 </form>
</div>


</div>
 )
}

export default Banner;