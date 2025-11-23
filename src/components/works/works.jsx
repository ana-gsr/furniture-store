import Purchase from '../../assets/purchase.png'
import Warehouse from '../../assets/warehouse.png'
import Room from '../../assets/room.png'

const Works = () => {
  return (
    <>
      <div className='p-10 text-center'>
        <h2 className='text-2xl font-bold text-[#333333]'>How it works</h2>
        <p className='text-sm text-[#666666] mt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className='flex flex-wrap justify-center items-start gap-8 p-8 text-center'>
        {/* Step 1 */}
        <div className='w-64 flex flex-col items-center'>
          <img src={Purchase} alt="Purchase Securely" className='w-full h-auto mb-5'/>
          <span className="relative bottom-10 translate-x-[0] bottom inline-flex items-center justify-center w-15 h-15 rounded-full bg-black text-white border-[10px] border-white text-base font-bold">1.</span>
          <p className='font-bold text-[#333333]'>Purchase Securely</p>
          <p className='text-sm font-normal text-[#666666]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        {/* Step 2 */}
        <div className='w-64 flex flex-col items-center'>
          <img src={Warehouse} alt="Ships From Warehouse" className='w-full h-auto mb-4'/>
          <span className="relative bottom-10 translate-x-[0] bottom inline-flex items-center justify-center w-15 h-15 rounded-full bg-black text-white border-[10px] border-white text-base font-bold">2.</span>
          <p className='text-base font-bold text-[#333333]'>Ships From Warehouse</p>
          <p className='text-sm font-normal text-[#666666]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        {/* Step 3 */}
        <div className='w-64 flex flex-col items-center'>
          <img src={Room} alt="Style Your Room" className='w-full h-auto mb-4' />
          <span className="relative bottom-10 translate-x-[0] bottom inline-flex items-center justify-center w-15 h-15 rounded-full bg-black text-white border-[10px] border-white text-base font-bold">3.</span>
          <p className='text-base font-bold text-[#333333]'>Style Your Room</p>
          <p className='text-sm font-normal text-[#666666]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </>
  );
};

export default Works;
