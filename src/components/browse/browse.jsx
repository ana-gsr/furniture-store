import Dining from '../../assets/dining.png'
import Livingroom from '../../assets/livingroom.png'
import Bedroom from '../../assets/bedroom.png'

const browse = () => {
  return (
    <div>
        <div className='p-6 text-center'>
            <h2 className='text-2xl font-bold text-[#333333]'>Browse The Range</h2><br />
            <p className='text-sm text-[#666666]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
         {/*imagen*/}
        <div className='flex flex-nowrap justify-center items-center relative grid-rows-3 gap-4 p-8 text-center font-bold rounded-md'>
           <a href="#"><img src={Dining}alt="Dining Room" className='max-w-65 max-h-80' />Dining</a>
           <a href="#"><img src={Livingroom} alt="Living Room" className='max-w-65 max-h-80'/>Living</a>
           <a href="#"><img src={Bedroom} alt="Bedroom" className='max-w-65 max-h-80'/>Bedroom</a>
        </div>
        <hr className='border-[#D7D6D6]'/>
    </div>
  )
}

export default browse