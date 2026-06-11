import React from 'react'
import Carrusel from '../../assets/carrusel.png'

const Carusel = () => {
  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold text-[#333333]">
        Inspiration Collection
      </h2>
      <p className="text-sm text-[#666666]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      {/* Imagen responsiva */}
      <div className="flex justify-center items-center p-1 w-full">
        <a href="#">
          <img
            src={Carrusel}
            alt="collection images"
            className="w-full max-w-[50rem] h-auto rounded-md"
          />
        </a>
      </div>
    </div>
  )
}

export default Carusel
