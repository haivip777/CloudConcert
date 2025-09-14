import './cardintro.css'

const CardIntro = () => {
  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-5 sm:mt-10 overflow-hidden">
      <div className="relative z-10 w-full ">
        <div className="bg-black/30 backdrop-blur rounded-3xl border border-white/20 p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 text-center">
                
      
                <div className="flex flex-col items-center justify-center space-y-4 md:border-r border-white/30 md:pr-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white/90 tracking-wider">
                        THỜI GIAN
                    </h2>
                    <div className="text-white/80 text-lg md:text-xl font-medium">
                        <div className="mb-1">06.09.2025</div>
                        <div className="text-base md:text-lg">20:00 - 23:00</div>
                    </div>
                </div>
                
  
                <div className="flex flex-col items-center justify-center space-y-4 md:border-r border-white/30 md:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white/90 tracking-wider">
                        ĐỊA ĐIỂM
                    </h2>
                    <div className="text-white/80 text-lg md:text-xl font-medium max-w-xs">
                        Khu di tích Hoàng Thành Thăng Long
                    </div>
                </div>
                

                <div className="flex flex-col items-center justify-center space-y-4 md:pl-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-white/90 tracking-wider">
                        HÌNH THỨC
                    </h2>
                    <div className="text-white/80 text-lg md:text-xl font-medium">
                        Live Concert
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default CardIntro