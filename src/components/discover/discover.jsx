import React from 'react'
import silla from '../../assets/silladiscover.png'


function SillaDiscover() {
  return (
    <div>
       <img src={silla} alt="silla y planta" className="w-full max-h-[450px]  object-cover" />
      <div className="absolute top-1/4 right-10 bg-[#DFE9F4] p-6 rounded max-w-md max-h-sm">
        <p className="text-gray-700 text-sm font-bold mb-2">New arrival</p>
        <h1 className="text-[#054C73] text-4xl font-bold mb-2">Discover Our <br /> New Collection</h1>
        <p className="text-gray-700 text-sm mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, eveniet perspiciatis.</p>
        <button className="bg-[#054C73] text-white text-xs px-9 py-3 rounded-full hover:bg-blue-600 transition">BUY NOW</button>
      </div>
      <div className="bg-[#DFE9F4] ">
          <img src="camion" alt="camion de entrega" />
          <h3 className="text-gray-900 font-bold text-md">Free Delivery</h3>
          <p className="text-gray-900 text-xs ">Lorem ipsum dolor sit amet.</p>
        </div>
    </div>
  )
}

export default SillaDiscover
