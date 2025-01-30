import { FaStar } from 'react-icons/fa6'
export default function About() {
    return (
        <div className='bg-main body flex justify-center items-center text-white'>
                <div>
                    <div className="flex flex-col justify-center items-center pt-4 mb-5">
                        <h2 className='mb-3 text-3xl md:text-4xl lg:text-5xl font-bold'>ABOUT COMPONENT</h2>
                        <div className="flex flex-row justify-center items-center mb-3">
                            <div className='line me-3 bg-white'></div>
                            <FaStar className='star' />
                            <div className='line ms-3 bg-white'></div>
                        </div>
                    </div>
                    <div className="container flex justify-center items-center">
                        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5 w-3/4 ">
                            <div className="md:pl-5 sm:text-xl">
                                <p>
                                    Freelancer is a free Tailwind theme created by Route. The download
                                    includes the complete source files including HTML, CSS, and JavaScript
                                    as well as optional SASS stylesheets for easy customization.
                                </p>
                            </div>
                            <div className="md:pr-5 sm:text-xl">
                                <p>
                                    Freelancer is a free Tailwind theme created by Route. The download
                                    includes the complete source files including HTML, CSS, and JavaScript
                                    as well as optional SASS stylesheets for easy customization.
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}