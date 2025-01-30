import { FaStar } from "react-icons/fa";

export default function Contact() {
    return (
        <>
            <section>
                <div className="body flex flex-col items-center ">
                    <div className="flex flex-col justify-center items-center pt-4 text-secondary mb-10">
                        <h2 className='mb-4 font-bold text-3xl md:text-4xl lg:text-5xl'>CONTACT SECTION</h2>
                        <div className="flex flex-row justify-center items-center mb-4">
                            <div className="line me-3 bg-secondary"></div>
                            <FaStar className='star' />
                            <div className="line ms-3 bg-secondary"></div>
                        </div>
                    </div>
                    <form className="w-full sm:w-1/2">
                        <div className="relative z-0 w-full mb-8 group px-3 py4">
                            <input type="text" name="floating_name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-gray-300 peer" placeholder=" " required />
                            <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10  rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:text-main peer-focus:scale-75 peer-focus:-translate-y-6 font-medium">userName</label>
                        </div>
                        <div className="relative z-0 w-full mb-8 group px-3 py4 ">
                            <input type="number" name="floating_age" id="floating_age" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-gray-300 peer" placeholder=" " required />
                            <label htmlFor="floating_age" className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10   rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:text-main peer-focus:scale-75 peer-focus:-translate-y-6 font-medium">userAge</label>
                        </div>
                        <div className="relative z-0 w-full mb-8 group px-3 py4">
                            <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-gray-300 peer" placeholder=" " required />
                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10   rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:text-main peer-focus:scale-75 peer-focus:-translate-y-6 font-medium">userEmail</label>
                        </div>
                        <div className="relative z-0 w-full mb-8 group px-3 py4">
                            <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 focus:border-gray-300 peer" placeholder=" " required />
                            <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-md text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10   rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:text-main peer-focus:scale-75 peer-focus:-translate-y-6 font-medium">userPassword</label>
                        </div>

                        <button type="submit" className="text-white bg-main  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5">Send Message</button>
                    </form>
                </div>

            </section>



        </>
    )
}