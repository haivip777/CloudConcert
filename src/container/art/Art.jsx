import './art.css'
import img1 from '../../assets/art/img_art7.jpg'
import img2 from '../../assets/art/img_art1.jpg'
import img3 from '../../assets/art/img_art3.jpg'
import img4 from '../../assets/art/img_art4.jpg'
import img5 from '../../assets/art/img_art5.jpg'

const images = [
  { src: img1, cls: "div1", name: "Hoàng Thùy Linh" },
  { src: img2, cls: "div2", name: "Sơn Tùng MTP" },
  { src: img3, cls: "div3", name: "Khánh Phương" },
  { src: img4, cls: "div4", name: "Noo Phước Thịnh" },
  { src: img5, cls: "div5", name: "Chi Pu" }
]

const Art = () => {
  return (
    <section id="artists" className="lh-items max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 relative z-10">
      {images.map((item, index) => (
        <div
          key={index}
          className={`lh-item  flex items-center relative group justify-center font-bold ${item.cls}`}
        >
          <img
            src={item.src}
            alt={`Art ${index + 1}`}
            className="w-full h-full object-cover rounded-3xl shadow-3xl"
          />
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/100 to-transparent"></div>
          
          <div className="absolute bottom-0 left-4 text-white flex flex-col transition-all duration-500 group-hover:-translate-y-3">
            <div className="font-bold text-lg transition-all duration-500">
              {item.name}
            </div>
            <div className="text-base opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
              Ca sĩ
            </div>
            <div className="text-sm opacity-0 translate-y-2 transition-all duration-700 group-hover:opacity-100 group-hover:translate-y-0">
              Top Hit 2025
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Art
