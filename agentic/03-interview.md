# Artifact 3: Bảng tiêu chí phỏng vấn & Rà soát Bug (Interview)

Dưới vai trò là Reviewer, để xác nhận hàm `demBookingChuaHuy(bookings, ngayLoc)` đã đạt chuẩn "đúng" và an toàn để merge vào nhánh `main`, tôi sẽ dùng danh sách rà soát sau đây dựa trên 4 họ bug cốt lõi:

### 1. Họ bug Biên (Boundary)
- **Câu hỏi rà soát:** Vòng lặp có quét qua đúng và đủ số lượng phần tử thực tế của mảng hay không? Có bị thiếu phần tử cuối hoặc chạy lố giới hạn không?
- **Tiêu chí "Đúng":** Điều kiện vòng lặp phải phụ thuộc vào độ dài thực tế của mảng, tức là sử dụng `bookings.length` (ví dụ: `i < bookings.length`). Tuyệt đối không dùng giới hạn số học cố định như `i < 10`.

### 2. Họ bug Dữ liệu rỗng / Null (Empty Array/Null)
- **Câu hỏi rà soát:** Hàm sẽ phản ứng ra sao nếu dữ liệu đầu vào `bookings` bị rỗng (`[]`), hoặc do lỗi API truyền vào `null`/`undefined`?
- **Tiêu chí "Đúng":** Code không được phép vỡ (crash) với lỗi `Cannot read properties of undefined`. Có thể xử lý bằng cách kiểm tra mảng hợp lệ trước khi lặp (ví dụ: `if (!bookings || bookings.length === 0) return 0;`).

### 3. Họ bug Giá trị ma thuật (Magic Number / Magic String)
- **Câu hỏi rà soát:** Có giá trị số đếm hay chuỗi văn bản nào bị "chết cứng" (hardcode) thẳng vào logic thay vì dùng biến/tham số không?
- **Tiêu chí "Đúng":** 
  - Loại bỏ hoàn toàn số `10` trong vòng lặp.
  - Loại bỏ chuỗi ngày `"2026-07-27"`. Điều kiện if phải so sánh với tham số được truyền vào: `bookings[i].ngay === ngayLoc`.

### 4. Họ bug Thông báo / Log thừa (Messaging/Logging)
- **Câu hỏi rà soát:** Có đoạn code debug nào bị bỏ quên trước khi tạo Pull Request không? 
- **Tiêu chí "Đúng":** Môi trường production cần sạch sẽ. Đảm bảo không còn sót lại các dòng `console.log()`, `alert()` không cần thiết trong logic của hàm.