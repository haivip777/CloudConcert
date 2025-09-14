import './highlight.css'
import {AutoSlider} from '../../components'

import img1 from "../../assets/img_h1.jpg";
import img2 from "../../assets/img_h2.jpg";
import img3 from "../../assets/img_h3.jpg";


const images = [img1, img2, img3];

const HingLight = () => {
  return (
    <section id="highlight" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28">
      <div className="flex flex-col justify-between sm:flex-row gap-8 sm:gap-12 items-center">
        
        <div className="w-full sm:w-1/2 h-full">
          <AutoSlider images={images} interval={5000} />
        </div>

        <div className="space-y-4 text-white w-full sm:w-1/2">
          <p className="uppercase text-sm font-semibold tracking-wide opacity-80">
            Về sự kiện
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-snug">
            Vì Sao Bạn Không Thể  <br /> Bỏ Lỡ
          </h2>

          <ul className="space-y-2 list-disc list-inside opacity-90">
            <li>
              Ưu đãi vé → miễn phí, dễ đăng ký.
            </li>
            <li>
              Giá trị chương trình → nghệ sĩ nổi tiếng.
            </li>
            <li>
              Trải nghiệm khán giả → âm thanh ánh sáng đỉnh cao.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default HingLight