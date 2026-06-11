import Dining from '../../assets/dining.png'
import Livingroom from '../../assets/livingroom.png'
import Bedroom from '../../assets/bedroom.png'

const Browse = () => {
  return (
    <div>
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-[#333333]">
          Browse The Range
        </h2>
        <p className="text-sm text-[#666666]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      {/* Imagenes responsivas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8 text-center font-bold">
        <a href="#">
          <img src={Dining} alt="Dining Room" className="w-full h-auto rounded-md" />
          Dining
        </a>
        <a href="#">
          <img src={Livingroom} alt="Living Room" className="w-full h-auto rounded-md" />
          Living
        </a>
        <a href="#">
          <img src={Bedroom} alt="Bedroom" className="w-full h-auto rounded-md" />
          Bedroom
        </a>
      </div>

      <hr className="border-[#D7D6D6]" />
    </div>
  )
}

export default Browse
