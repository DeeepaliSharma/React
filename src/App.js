import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
//import Body from "./components/Body";
//import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurnatMenu from "./components/RestaurantMenu";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import Shimmer from "./components/Shimmer";

  
const About = lazy (()=> import("./components/About"));
const Body = lazy (()=> import("./components/Body"));

const AppLayout =()=>
    {
            return(
                <div className ="app">
                    < Header/>
                    < Outlet/>
                </div>
            );
    };

    const appRouter = createBrowserRouter([
        {
            path : "/",
            element: <AppLayout/>,
            children:[
                {
                    path : "/",
                    element: <Suspense fallback ={<Shimmer/>}> <Body/></Suspense>

                },

                {
                    path:"/about",
                    element:<Suspense fallback ={<Shimmer/>}> <About/></Suspense> ,
                   
        
                },
                {
                    path:"/contact",
                   
                    element: <ContactUs/>,
                },
                {
                    path: "/restaurant/:resId",
                    element: <RestaurnatMenu/>
                }

            ],
            errorElement : <Error/>
           

        },
        {
            path:"/about",
            element: <About/>,
           

        },
        {
            path:"/contact",
           
            element: <ContactUs/>,
        },
       

]);

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<RouterProvider router={appRouter} />);