import './timeline.css'

const TimeLine = () => {
  return (
    <section id="timeline" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 text-white relative z-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold leading-snug text-center mb-12">
          TIMELINE – MỐC THỜI GIAN QUAN TRỌNG
        </h2>

        <div className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="md:w-1/3 relative">
              <div className="border-l-2 border-red-600 pl-4">
                <h3 className="font-bold uppercase text-2xl">Đăng ký nhận vé online</h3>
                <p className="text-[16px] text-gray-400 text-xl">02.09.2025</p>
              </div>
            </div>
            <div className="md:w-2/3 bg-[#1e1f28] rounded-lg p-6 shadow-lg">
              <p className="font-bold text-gray-100 mb-2 text-xl">
                14:00 PM — Mở đăng ký 2000 vé online
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 text-[16px">
                <li>Điền đầy đủ thông tin để đăng ký vé. Hệ thống dừng khi phát hết số lượng.</li>
                <li>Danh sách đăng ký thành công được công bố trên website, kèm tên và CCCD che 4 số cuối.</li>
                <li>Vé online gửi qua email. Mỗi vé có mã code riêng cho 01 người dùng.</li>
                <li>Khi đến sự kiện, vui lòng mang CCCD/VNeID mở từ app để qua cửa an ninh.</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="md:w-1/3 relative">
              <div className="border-l-2 border-red-600 pl-4">
                <h3 className="font-bold uppercase text-2xl">Live Concert: Đêm nhạc Rock</h3>
                <p className="text-[16px] text-gray-400 text-xl">07.09.2025</p>
              </div>
            </div>
            <div className="md:w-2/3 bg-[#1e1f28] rounded-lg p-6 shadow-lg">
              <p className="font-bold text-gray-100 mb-2 text-xl">16:00 PM — Check-in</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 text-[16px] mb-4">
                <li>Bắt đầu check-in vé.</li>
              </ul>
              <p className="font-bold text-gray-100 mb-2 text-xl">20:00 PM — Bắt đầu show</p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 text-[16px]">
                <li>Thưởng thức đêm nhạc rock bùng nổ!</li>
              </ul>
            </div>
          </div>
        </div>
    </section>

  )
}

export default TimeLine