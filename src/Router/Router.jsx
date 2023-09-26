import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Error/Error";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import Cards from "../Pages/Cards/Cards";


const myCreateRoute = createBrowserRouter ([
   {
     path:'/',
     element:<MainLayout></MainLayout>,
     errorElement:<Error></Error>,
     children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/blog.json')           
            },
            {
              path:'/donation',
              element:<Donation></Donation>
            } ,
           {
              path:'/statistics',
              element:<Statistics></Statistics>,
                             
           },
           {
            path:'/allCards/:id',
            element:<Cards></Cards>,
            loader:()=>fetch('/blog.json')
           }
     ]                         
   }
])


export default  myCreateRoute;