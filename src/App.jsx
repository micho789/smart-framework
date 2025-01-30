import {createBrowserRouter, RouterProvider} from "react-router-dom"
import MainLayout from "./Pages/MainLayout/MainLayout"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import Portfolio from "./Pages/Portfolio/Portfolio"
import NotFound from "./Pages/NotFound/NotFound"


export default function App(){
  
  const routes =  createBrowserRouter([{
    path:'' , element: <MainLayout/>,
    children:[
      {index: true , element: <Home/>},
      {path: "about" , element: <About/>},
      {path: "contact" , element: <Contact/>},
      {path: "portfolio" , element: <Portfolio/>},
      {path: "*" , element: <NotFound/>}    
    ]
  }])

  
  return <RouterProvider router={routes}></RouterProvider>
}