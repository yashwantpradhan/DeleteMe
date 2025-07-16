import React from 'react'

function Card({website="Platform Name", details="Details about the platform", value="#"}) {
    const handleClick =(value)=>{
        window.open(value,'_blank')
    }
  return (
    <div className='select-none'>
        <div className="relative backdrop-blur-sm p-6 border border-white/20 rounded-lg max-w-sm ml-6 pl-8 mt-5 shadow-lg " href="#">
  
    <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

    <div class="my-4">
        <h2 class="text-white text-2xl font-bold pb-2">{website}</h2>
        <p class="text-gray-300 py-1">{details}</p>
    </div>

    <a class="flex justify-end">
        <button class="px-2 py-1 text-white border border-gray-200 font-semibold rounded hover:bg-gray-800 cursor-pointer"
        onClick={()=>handleClick(value)}
        >
        Click Here
        </button>
    </a>
  </div>
      
    </div>
  )
}

export default Card
