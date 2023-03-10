import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import tableImg from  '../../images/table.png'

const OrderRow = ({order, handleDelete, handleStatusUpdate}) => {
    const {_id, serviceName, Price, paid, customer, service, status} = order
    const [orderService, setOrderService] = useState({})

    useEffect(()=>{
        fetch(`https://creative-agency-backend.vercel.app/services/${service}`)
        .then(res => res.json())
        .then(data => setOrderService(data))
    }, [service])

    // Delete 


    return (
            <tr className=''>
                <td className='border-b-slate-300'>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                        {
                            orderService ? <img className='rounded-full' src={orderService.image} alt="Avatar Tailwind CSS Component" /> : <img className='w-12 rounded-full' src={tableImg} alt="" srcset="" />
                        }
                        </div>
                        </div>
                        <div>
                        <div className="font-poppins text-md">{customer}</div>
                        </div>
                    </div>
                </td>
                <td className="font-poppins text-md  border-b-slate-300">
                    {serviceName}
                </td>
                
                <td className="font-poppins text-md  border-b-slate-300"> ${Price}</td>
                <td className='border-b-slate-300 text-center'>
                <Link onClick={()=> handleStatusUpdate(_id)}  className='px-8 py-2 rounded-full   font-poppins  text-md border border-[#5E37DA] transition-all duration-500 text-[#5E37DA]'>{status ? status : 'Pending'}</Link>
                </td>

                {/* -- Payment -- */}
                {/* <td className="font-poppins text-md  border-b-slate-300">
                    {
                        Price && !paid && <Link to={`/dashboard/pay/${_id}`} className='bg-[#957DFF] hover:bg-[#5E37DA] py-2 px-4 rounded-full text-white font-poppins text-sm transition-all duration-500 '>Pay</Link>
                    }
                    {
                        Price && paid && <button className='bg-[#2dc653] py-2 px-4 rounded-full text-white font-poppins text-sm'>Paid</button>
                    }
                </td> */}

                <td className='border-b-slate-300 text-center'>
                <Link  onClick={()=>handleDelete(_id)} className='px-8 py-2 rounded-full bg-[#896EFF] text-white font-poppins  text-md hover:bg-[#5E37DA] transition-all duration-500 '>Remove</Link>
                </td>
       
            </tr>
    );
};

export default OrderRow;