import { Outlet } from "react-router-dom";
import Navbar  from "./../../Components/Navbar/Navbar"
import Footer  from "./../../Components/Footer/Footer"
import style from './MainLayout.module.css'

export default function MainLayout(){
    return(
        <div className="flex flex-col justify-between min-h-screen">
            <Navbar/>
            <div className={style.outletSection}>
                <Outlet />
            </div>
            <Footer/>
        </div>
    )
}