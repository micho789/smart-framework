import { FaFacebook, FaGlobe, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import style from './Footer.module.css'
export default function Footer() {
    return (
        <footer>
            <div className='bg-secondary p-10'>
                <div className='container'>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-4">
                            <div className='flex flex-col justify-center items-center text-white text-center'>
                                <h2 className="text-3xl font-bold mt-2 mb-2 pt-3">LOCATION</h2>
                                <p className="mb-4">2215 John Daniel Drive</p>
                                <p className="mb-4">Clark, MO 65243</p>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className='flex flex-col justify-center items-center text-white text-center'>
                                <h2 className="text-3xl font-bold mt-2 pt-3">AROUND THE WEB</h2>
                                <div className={`mt-4 ${style.links} `}>
                                    <ul className="flex space-x-4">
                                        <li><FaFacebook className={style.icon} /></li>
                                        <li><FaTwitter className={style.icon} /></li>
                                        <li><FaLinkedinIn className={style.icon} /></li>
                                        <li><FaGlobe className={style.icon} /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className='flex flex-col justify-center items-center text-white text-center'>
                                <h2 className="text-3xl font-bold mb-2 mt-2 pt-3">ABOUT FREELANCER</h2>
                                <p className="mb-4">
                                    Freelance is a free-to-use, licensed theme <br /> created by Route.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.lastFooter}>
                <div className='container flex justify-center items-center'>
                    <p className='text-center pt-2 mb-3 text-white'>Copyright © Your Website 2021</p>
                </div>
            </div>
        </footer>
    )
}