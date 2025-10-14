import Lady from '../../assets/lady.png'

const Learn = () => {
  return (
    <div className="bg-[#F2F5FF] flex flex-col md:flex-row items-center justify-between px-8 py-16">
      {/*columna txt*/}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h2 className="text-3xl font-bold text-[#333333] mb-4">Beautify Your Space</h2>
        <p className="text-[#666666] mb-6">
          Facilis sint molestias ipsa quis tenetur excepturi maiores molestiae quia, repudiandae necessitatibus at sunt reiciendis, velit et dignissimos.
        </p>
        <a href="#">
          <button className="bg-[#054C73] text-white text-xs px-9 py-3 rounded-full hover:bg-blue-600 transition">
            Learn More
          </button>
        </a>
      </div>

      {/*columna imgn*/}
      <div className="md:w-1/2 flex justify-center items-center relative">
        {/*circulo verde*/}
        <div className="absolute w-52 h-52 bg-[#09513B] rounded-full -z-0 translate-x-15 translate-y-5"></div>
        {/*imagen*/}
        <img src={Lady} alt="lady" className="relative z-10 w-64 h-auto object-cover rounded-tl-4xl rounded-tr-md rounded-br-4xl rounded-bl-md" />
      </div>
    </div>
  )
}

export default Learn
