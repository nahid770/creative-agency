import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import shape from '../../images/shapeT.png'
import './ServiceDetails.css'

const ServiceDetails = () => {
    const {serviceId}= useParams()
    const [service, setService] = useState([]);
    const {_id, name, description, image, Price} = service
    useEffect(()=>{
        const url = `https://creative-agency-backend.vercel.app/services/${serviceId}`
        console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    return (
        <div>
            
           <div className='flex flex-col md:flex-row-reverse justify-center items-center gap-16 mt-16 relative'>

            <div>
                <img className='max-w-xs md:max-w-md rounded-md shadow-lg' src={image} alt="" />
            </div>
            <div>
            <h2 className='text-3xl md:text-4xl font-poppins py-2 my-3 text-white bg-black text-center mb-5 z-[999]'>{name}</h2>
                   
            <p className='text-sm md:text-md font-poppins '>{description}</p>
            <p className='text-sm font-poppins py-5 text-[#896EFF]'><span className='text-md font-poppins font-bold text-black'>Service ID:</span> {_id}</p>
            <h2 className='text-md font-poppins font-bold text-xl'>Price: <span className='text-xl font-poppins text-[#896EFF]'>${Price}</span></h2>
            
        </div>
            
           </div>
           <div className='text-center mt-16'>
            <Link to={`/checkout/${_id}`} className='px-10 py-3 rounded-full bg-[#896EFF] text-white font-poppins text-lg hover:bg-[#5E37DA] transition-all duration-500'>Proceed Checkout</Link>
           </div>
        </div>
    );
};

export default ServiceDetails;