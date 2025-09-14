
import { BuyNow, NavBar, CardIntro, CountDown } from "./components";
import { Art, Contact, HeroBanner, Hinglight, TimeLine, TicketForm } from "./container";
import img_ball from './assets/ball.png';

export default function App() {
  return (
    <>
      <div className="custom-gradient overflow-hidden relative">
        <div className="absolute inset-0 sparkle-bg opacity-40 rounded-3xl overflow-hidden pointer-events-none"></div>
        <NavBar />
        <HeroBanner />
        <h1 className="text-white mt-10 text-center text-[24px] sm:text-[36px] lg:text-[50px] font-bold">Sự kiện sẽ diễn ra sau:</h1>
        <CountDown />

        <CardIntro />
        <Hinglight />
        <h1 className="text-white text-left max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 text-3xl sm:text-4xl font-extrabold leading-snug">Các nghệ sĩ nổi tiếng:</h1>
        <Art />
        <TimeLine />
        <img src={img_ball} alt="ball" className=" w-24 h-24 mx-auto mt-12 spin-slow" />
        <TicketForm />
        <Contact />
        <p className="text-white text-center mx-auto py-10 sm:py-14 text-xs sm:text-sm font-extrabold leading-snug">@Copyallright HaiDev 2025</p>
      </div>
      
    </>
  );
}
