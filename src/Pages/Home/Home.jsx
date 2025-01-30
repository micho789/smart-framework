import { FaStar } from 'react-icons/fa'
import img from '../../assets/avataaars.svg'

export default function Home(){
    return(
        <section>
            <div className='body bg-main flex justify-center items-center flex-col text-white'>
                    <img src={img} className='w-1/2 sm:w-1/4 md:w-1/3 lg:w-1/6 mb-3' alt='home-image' />
                    <div className="flex flex-col justify-center items-center pt-4">
                        <h2 className='mb-4 font-bold text-3xl md:text-4xl lg:text-5xl'>START FRAMEWORK</h2>
                        <div className="flex flex-row justify-center items-center mb-4">
                            <div className="line me-3 bg-white"></div>
                            <FaStar className='star' />
                            <div className="line ms-3 bg-white"></div>
                        </div>
                    </div>
                    <p>Graphic Artist - Web Designer - Illustrator</p>
                </div>
        </section>
    ) 
}