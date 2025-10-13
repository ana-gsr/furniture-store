import React from 'react'
import Carrusel from '../../assets/carrusel.png'

const carusel = () => {
  return (
    <div className='p-8 text-center'>
        <h2 className='text-2xl font-bold text-[#333333]'>Inspiration Collection</h2><br />
        <p className='text-sm text-[#666666]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className='p-20'>
            <a href="#"><img src={Carrusel} alt="collection images" className='w-full'/></a>
        </div>
    </div>
  )
}

export default carusel