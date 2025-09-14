import { useEffect, useState } from "react";
import './countdown.css'

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // const targetDate = new Date(2025, 9, 20, 0, 0, 0).getTime();
    const targetDate = new Date("2025-09-20T20:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / 1000 / 60) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeItems = [
    { value: timeLeft.days, label: "Ngày" },
    { value: timeLeft.hours, label: "Giờ" },
    { value: timeLeft.minutes, label: "Phút" },
    { value: timeLeft.seconds, label: "Giây" },
  ];

  return (

    <div className="flex flex-wrap gap-2 max-sm:max-w-[290px] my-10 sm:my-15 justify-between text-white font-bold max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
      {timeItems.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <span className="font-mono text-[45px] sm:text-[70px] lg:text-[110px] leading-none font-extrabold text-transparent stroke-text">
            {item.value < 10 ? `0${item.value}` : item.value}
          </span>

          <span className="text-[18px] sm:text-[26px] lg:text-[36px] leading-none">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
