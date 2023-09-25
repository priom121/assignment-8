import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import OneCard from "./OneCard";


const Cards = () => {
   const [cards , setCards] =useState([])

   const {id} =useParams()
   // console.log(id);

   const card = useLoaderData();
   // console.log(card);
 useEffect(()=>{
      const data = card.find(card=> card.id ===id)
     setCards(data)
 },[id ,card])
   // console.log(cards);
return (
  <div>
   <OneCard cards={cards}></OneCard>                                                                                  
  </div>
 );
};

export default Cards;