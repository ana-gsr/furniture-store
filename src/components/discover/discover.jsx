import React from 'react'
import silla from '../../assets/silladiscover.png'
import camion from '../../assets/iconoCamion.svg'
import reloj from '../../assets/24h.svg'
import shield from '../../assets/shield.png'

function SillaDiscover() {
  return (
    <div className="relative">
      {/* Imagen principal */}
      <img src={silla} alt="silla y planta" className="w-full max-h-[450px] object-cover pb-8" />

      {/* Bloque de texto sobre la imagen */}
      <div className="absolute top-1/4 right-10 bg-[#DFE9F4] p-6 rounded max-w-md shadow-lg">
        <p className="text-gray-700 text-sm font-bold mb-2">New arrival</p>
        <h1 className="text-[#054C73] text-4xl font-bold mb-2">
          Discover Our <br /> New Collection
        </h1>
        <p className="text-gray-700 text-sm mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, eveniet perspiciatis.
        </p>
        <button className="bg-[#054C73] text-white text-xs px-9 py-3 rounded-full hover:bg-blue-600 transition">
          BUY NOW
        </button>
      </div>

      {/* Beneficios */}
      <div className="bg-[#DFE9F4] flex flex-wrap justify-around gap-6 py-8 px-4">
        {/* Card 1 */}
        <div className="flex items-start gap-4 max-w-xs">
          <img src={camion} alt="camion de envio" className="w-10 h-10 object-contain" />
          <div>
            <h3 className="text-gray-900 font-bold text-md">Free Delivery</h3>
            <p className="text-gray-900 text-xs">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-start gap-4 max-w-xs">
          <img src={reloj} alt="24 hours" className="w-10 h-10 object-contain" />
          <div>
            <h3 className="text-gray-900 font-bold text-md">Support 24/7</h3>
            <p className="text-gray-900 text-xs">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-start gap-4 max-w-xs">
          <img src={shield} alt="shield" className="w-10 h-10 object-contain" />
          <div>
            <h3 className="text-gray-900 font-bold text-md">100% Authentic</h3>
            <p className="text-gray-900 text-xs">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SillaDiscover
