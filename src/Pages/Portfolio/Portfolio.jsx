import { FaPlus, FaStar } from "react-icons/fa";
import { useState } from "react";
import style from './Portfolio.module.css'
import img1 from './../../assets/port1.png'
import img2 from './../../assets/port2.png'
import img3 from './../../assets/port3.png'
import img4 from './../../assets/port4.png'
import img5 from './../../assets/port5.png'
import img6 from './../../assets/port6.png'

export default function Portfolio() {
    const images = [img1, img2, img3, img4, img5, img6]
    const [isModalOpen, setModalOpen] = useState(false);
    const [imageSource, setImageSource] = useState("");


    return (
        <>
            <div className="container">
                <div className="flex flex-col justify-center items-center pt-4 text-secondary mt-3">
                    <h2 className='mb-3 font-bold text-3xl md:text-4xl lg:text-5xl'>PORTFOLIO COMPONENT</h2>
                    <div className="flex flex-row justify-center items-center mb-3">
                        <div className='line me-3 bg-secondary'></div>
                        <FaStar className='star' />
                        <div className='line ms-3 bg-secondary'></div>
                    </div>
                </div>
                <div className="flex items-center justify-center flex-wrap">
                    {images.map((image, index) => (
                        <div key={index} className="sm:w-full md:w-1/2 lg:w-1/3 p-5">
                            <div className={`${style.portimg} relative overflow-hidden`}>
                                <img
                                    src={image}
                                    className="w-full rounded cursor-pointer"
                                    alt=""
                                />
                                <div
                                    className={`${style.portlayer} absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity rounded-3 cursor-pointer`}
                                    onClick={() => {
                                        setImageSource(image);
                                        setModalOpen(true);
                                    }}
                                >
                                    <FaPlus className={style.icons} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {isModalOpen && (
                    <div className="fixed inset-0 z-20 flex justify-center items-center">
                        <div
                            className='bg-sky-700 opacity-25 absolute w-full h-full'
                            onClick={() => setModalOpen(false)}
                        ></div>
                        <img src={imageSource} className="w-full z-30 sm:w-1/3  relative" alt="" />
                    </div>
                )}
            </div>
        </>
    )
}