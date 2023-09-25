import { Link } from "react-router-dom";


const Card = ({card}) => {
const {id ,Image,Title,Category,card_bg, category_bg,text_button_bg} =card
return (
<Link to={`/allCards/${id}`}>
<div  className="py-8 " >
<div style={{backgroundColor:card_bg}} className="card mt-10 py- card-compact h-96 w-80 bg-base-100 shadow-xl">
  <figure><img src={Image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 style={{backgroundColor:text_button_bg}} className=" w-1/3 text-white card-title font-semibold">{Title}</h2>
    <p style={{background:category_bg}} className="font-medium text-xl text-white " >{Category}</p>
   
  </div>
</div>                                                                                   
 </div>

</Link>
);
};

export default Card;