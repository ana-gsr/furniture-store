import React from 'react'
import silla from '../../assets/silladiscover.png'
import camion from '../../assets/iconoCamion.svg'
import reloj from '../../assets/24h.svg'
import shield from '../../assets/shield.png'

function SillaDiscover() {
  return (
    <div className="relative">
      {/* Imagen principal */}
      <img
        src={silla}
        alt="silla y planta"
        className="w-full max-h-[450px] object-cover pb-4"
      />

      {/* Bloque de texto sobre la imagen */}
      <div className="absolute 
                top-[4%] left-[35%]
                sm:top-[5%] sm:left-[70%] 
                md:top-[10%] md:left-[75%] 
                bg-[#DFE9F4] 
                p-2 sm:p-4 md:p-6 
                rounded 
                w-[30%] sm:w-[25%] md:w-[20%] 
                shadow-lg">
        <p className="text-gray-700 text-[7px] sm:text-xs md:text-xs font-bold mb-1">New arrival</p>
        <h1 className="text-[#054C73] text-base sm:text-sm md:text-md font-bold mb-1">
          Discover Our <br /> New Collection
        </h1>
        <p className="text-gray-700 text-[10px] sm:text-xs md:text-sm mb-2">
          Lorem ipsum dolor sit amet.
        </p>
        <a href="#">
          <button className="bg-[#054C73] text-white 
                            text-[10px] sm:text-xs md:text-xs 
                            px-3 sm:px-5 md:px-4 
                            py-1 sm:py-2 md:py-2 
                            rounded-full hover:bg-blue-600 transition"> BUY NOW </button>
        </a>
      </div>


      {/* Beneficios */}
      <div className="bg-[#F2F5FF] grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6 py-6 px-4">
        {/* Card 1 */}
        <div className="flex items-start gap-4 max-w-xs mx-auto">
          <img src={camion} alt="camion de envio" className="w-10 h-10 object-contain" />
          <div>
            <h3 className="text-gray-900 font-bold text-md">Free Delivery</h3>
            <p className="text-gray-900 text-xs">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-start gap-4 max-w-xs mx-auto">
          <img src={reloj} alt="24 hours" className="w-10 h-10 object-contain" />
          <div>
            <h3 className="text-gray-900 font-bold text-md">Support 24/7</h3>
            <p className="text-gray-900 text-xs">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-start gap-4 max-w-xs mx-auto">
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
