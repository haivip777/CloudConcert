import { useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ message: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // bạn có thể thay bằng API call
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mx-auto text-white">
        <div>
          <p className="text-sm uppercase font-semibold tracking-wider text-gray-300 mb-2 flex items-center gap-2">
            <span className="w-6 h-[2px] bg-red-600 inline-block"></span>
            Liên hệ
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-snug ">
            Thông tin <span className="block text-[#e11d48]">Sự kiện</span>
          </h2>
          <p className="mt-6 text-gray-300 leading-relaxed text-[16px]">
            Nếu bạn có bất kỳ thắc mắc nào về dịch vụ hoặc muốn hợp tác, vui lòng
            điền thông tin vào biểu mẫu bên dưới. <br />
            Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Nội dung ..."
              className="w-full min-h-24 h-28 p-4 rounded-xl bg-black/40 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
            ></textarea>

            <div className="flex items-center gap-2">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="flex-1 p-4 rounded-xl bg-black/40 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-red-600"
                required
              />
              <button
                type="submit"
                className="p-4 bg-[#e11d48] hover:opacity-75 rounded-xl transition flex items-center justify-center"
              >
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </form>
        </div>

        
        <div className="text-[16px]">
          <p className="text-sm uppercase font-semibold tracking-wider text-gray-300 mb-2 flex items-center gap-2">
            <span className="w-6 h-[2px] bg-red-600 inline-block"></span>
            Địa điểm
          </p>
          <div className="relative rounded-2xl overflow-hidden border border-gray-600 mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0175982944817!2d105.83696311540206!3d21.033709793063728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab97a1c3f5d3%3A0x58c8cbb5a5b6a80!2zSG_DoG5nIFRo4bqjbmggVGjDoG5nIExvbmc!5e0!3m2!1svi!2s!4v1634567890123!5m2!1svi!2s"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[320px]"
            ></iframe>

            <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-md rounded-xl p-5 border border-gray-700 max-w-xs">
              <h3 className="text-lg font-bold">Hoàng Thành Thăng Long</h3>
              <p className="text-sm text-gray-300 mt-1">
                19c Hoàng Diệu, Điện Biên, Ba Đình, Hà Nội
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Hoàng+Thành+Thăng+Long,+19c+Hoàng+Diệu,+Ba+Đình,+Hà+Nội"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 px-4 py-2 bg-[#e11d48] hover:opacity-75 text-white rounded-lg flex items-center gap-2 transition"
              >
                Tìm đường <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
