import React, { useState } from "react";
import { useEffect } from "react";

const TicketForm = () => {
  const [selected, setSelected] = useState(null);
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [cccd, setCccd] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    async function fetchTickets() {
      try {
        const res = await fetch("/api/admin/tickets");
        const data = await res.json();

        // Map dữ liệu về format bạn muốn
        const formatted = data.map((item, index) => ({
          id: index, // có thể dùng index hoặc ticket_type
          name: item.ticket_type,
          price: `${item.price.toLocaleString("vi-VN")} VND`,
          left: `${item.remaining_quantity}/${item.total_quantity} còn lại`,
        }));

        setTickets(formatted);
      } catch (err) {
        console.error("Error fetching tickets:", err);
      }
    }

    fetchTickets();
  }, []);

  const validate = () => {
    const e = {};
    if (!selected) e.selected = "Vui lòng chọn loại vé.";
    if (!name || name.trim().length < 2) e.name = "Vui lòng nhập họ và tên (tối thiểu 2 ký tự).";
    if (!dob) e.dob = "Vui lòng chọn ngày sinh.";
    if (!cccd || !/^(?:\d{9}|\d{12})$/.test(cccd)) e.cccd = "CCCD phải là 9 hoặc 12 chữ số.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Email không hợp lệ.";
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setSuccess("");
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSuccess("Đăng ký thành công!");
      setSelected(null);
      setName("");
      setDob("");
      setCccd("");
      setEmail("");
      setErrors({});
    }
  };

  const inputClass = (field) =>
    `w-full bg-transparent px-4 py-2 rounded-md text-white ${
      errors[field] ? "border border-red-500" : "border border-gray-700 focus:border-indigo-500"
    } focus:outline-none`;

  return (
    <section id="booking" className="h-fit max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 relative z-10">
      <div className="bg-[#1e1f28] w-full rounded-xl shadow-2xl p-8">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-6">ĐĂNG KÝ</h2>

        {success && <div className="mb-4 text-green-400 font-medium">{success}</div>}

        <div>
          <h3 className="text-white font-semibold mb-4">Chọn loại vé</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tickets.map((t) => (
              <div
                key={t.id}
                onClick={() => {
                  setSelected(t.id);
                  setErrors((prev) => ({ ...prev, selected: undefined }));
                }}
                className={`cursor-pointer rounded-lg p-4 transition select-none ${
                  selected === t.id
                     ? "border-2 border-solid border-indigo-700 shadow-lg shadow-indigo-500/50"
                      : "border border-solid border-gray-700 hover:border-0 hover:border-indigo-600 hover:shadow-lg hover:shadow-indigo-500/50"
                }`}
              >
                <p className="text-white font-semibold">{t.name}</p>
                <p className="text-sm text-gray-300">💰 {t.price}</p>
                <p className="text-sm text-pink-400">🎟 {t.left}</p>
              </div>
            ))}
          </div>
          {errors.selected && <p className="text-red-300 text-xs mt-2">{errors.selected}</p>}
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label className="block text-gray-300 text-sm mb-1">Họ và tên</label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrors((p) => ({ ...p, name: undefined }));
              }}
              className={inputClass("name")}
              placeholder="Nguyễn Văn A"
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 text-sm mb-1">Ngày sinh</label>
              <div className="relative">
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => {
                    setDob(e.target.value);
                    setErrors((p) => ({ ...p, dob: undefined }));
                  }}
                  className={`${inputClass("dob")} appearance-none`} 
                  aria-invalid={errors.dob ? "true" : "false"}
                />
                {/* Icon custom */}
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white p-2 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 
                      00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
              </div>
              {errors.dob && <p className="text-red-400 text-xs mt-1">{errors.dob}</p>}
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-1">CCCD</label>
              <input
                value={cccd}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, "");
                  setCccd(val);
                  setErrors((p) => ({ ...p, cccd: undefined }));
                }}
                className={inputClass("cccd")}
                placeholder="012345678901"
                maxLength={12}
                aria-invalid={errors.cccd ? "true" : "false"}
              />
              {errors.cccd && <p className="text-red-400 text-xs mt-1">{errors.cccd}</p>}
            </div>
          </div>

          <div>
            <label className="block text-gray-300 text-sm mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((p) => ({ ...p, email: undefined }));
              }}
              className={inputClass("email")}
              placeholder="email@domain.com"
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
          </div>

          <button
            type="submit"
            className=" bg-[#e11d48] hover:opacity-75 px-4 py-2 w-full rounded-lg font-semibold
             transition duration-300 text-white outline-0"
          >
            Đặt vé
          </button>
        </form>
      </div>
    </section>
  );
};

export default TicketForm;
