import React, { useState } from 'react'
import Header from '../components/Header'
// import { FaPhoneAlt, FaUser } from 'react-icons/fa'


const Comments = () => {

  const [comments, setComments]= useState('');



  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='' title='Comments'/>
      <div className="relative mb-4">
                <span className="absolute flex inset-y-7 items-center pl-4 text-gray-400"></span>
                <input 
                onChange={event => setComments(event.target.value)}
                placeholder='Comments'
                type='comment'
                required
                    className='outline-none
                    bg-gray-200
                    placeholder-gray-500
                    text-black
                    pl-9 pr-4 py-2
                    w-full
                    rounded-lg
                    transition 
                    focus:ring-2 
                    focus:ring-blue-300' />
            </div>

    </div>
  )
}

export default Comments