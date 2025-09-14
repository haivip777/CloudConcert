import './herobanner.css'
import img_banner_de from "../../assets/img_banner_png1.png";



const HeroBanner = () => {
  return (
    <div className="hero-banner relative w-full h-fit z-100 mt-30">
      <picture className="w-full">
        <source srcSet={img_banner_de} media="(max-width: 639px)" />
        <source srcSet={img_banner_de} media="(min-width: 640px)" />
        <img className="w-full px-10 " src={img_banner_de} alt="hero-banner" />
      </picture>

      
    </div>

  )
}

export default HeroBanner