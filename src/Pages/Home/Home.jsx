import { useLoaderData } from "react-router-dom";
import AllCards from "../../Components/AllCards/AllCards";
import Banner from "../../Components/Header/Banner/Banner";


const Home = () => {
     const cards = useLoaderData()
     // console.log(cards);
return (
 <div>
      <Banner cards={cards}></Banner>
       <AllCards cards={cards}></AllCards>                                                                               
 </div>
 );
};

export default Home;