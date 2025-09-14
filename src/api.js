const BASE_URL = "https://jyv6dmhcc7.execute-api.us-east-1.amazonaws.com/prd";

// 1. Lấy danh sách vé
// export async function listTickets() {
//   const res = await fetch(`${BASE_URL}/tickets`);
//   return res.json();
// }
export async function listTickets() {
  const res = await fetch(`${BASE_URL}/tickets`);
  const data = await res.json();   // phải await ở đây
  console.log(data);               // log ra dữ liệu thực tế
  return data;
}


// 2. Đặt vé (reserve)
export async function reserveTicket(email, ticketType) {
  const res = await fetch(`${BASE_URL}/reserve`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, ticket_type: ticketType }),
  });
  return res.json();
}

// 3. Thanh toán (payment)
export async function payment(orderId) {
  const res = await fetch(`${BASE_URL}/payment`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ order_id: orderId }),
  });
  return res.json();
}
