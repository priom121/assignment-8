import Card from "./Card";


const AllCards = ({cards}) => {
 console.log(cards);
return (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
     {
        cards.map(card=><Card key={card.id} card={card}></Card>)
     }                                                                                     
 </div>
);
};

export default AllCards;