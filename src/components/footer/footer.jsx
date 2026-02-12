import IG1 from '../../assets/IG-1.jpg' 
import IG2 from '../../assets/IG-2.jpg'
import IG3 from '../../assets/IG-3.jpg'
import IG4 from '../../assets/IG-4.jpg'

const Footer = () => {
  return (
    <div className="px-8 py-20 bg-[#054C73] flex flex-col md:flex-row justify-between items-start gap-8">
      <div className="md:w-1/2 text-white">
        <h2 className="text-xl font-bold mb-4">Beauty Care</h2>
        <p className="text-sm mb-6">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h3 className="text-xl font-bold">Follow Us</h3>
      </div>
      <div className="md:w-1/2 text-center">
        <h3 className="text-xl font-bold text-white mb-6">Instagram Shop</h3>
        <div className="grid grid-cols-2 gap-4">
          <img src={IG1} alt="Decoración" className="w-full h-auto rounded" />
          <img src={IG2} alt="Cesta con oso" className="w-full h-auto rounded" />
          <img src={IG3} alt="Macramé" className="w-full h-auto rounded" />
          <img src={IG4} alt="Cocina moderna" className="w-full h-auto rounded" />

        </div>
      </div>
    </div>
  );
};

export default Footer;