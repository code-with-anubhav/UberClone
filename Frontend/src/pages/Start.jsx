import React from 'react'
import uberlogo from "../assets/images/uber-logo.png"
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className='bg-cover relative bg-bottom bg-[url(https://images.unsplash.com/photo-1515543582370-4cff31e54e8b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen w-full pt-5 flex justify-between flex-col md:bg-cover bg-no-repeat md:bg-center'>
        <img className='w-20 ml-1 md:w-28' src={uberlogo} alt="" />
      <div className='bg-white rounded-t-lg pb-7 py-4 px-4 md:mx-96 md:flex justify-center bg-opacity-60 '>
        <h2 className='text-3xl font-bold md:absolute top-16 right-5 md:font-medium md:text-[#905125]'>Get Started with Uber</h2>
        <Link to="/login" className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5 md:w-96 hover:bg-[#412B20]'>Continue</Link>
      </div>
    </div>
  )
}

export default Start
