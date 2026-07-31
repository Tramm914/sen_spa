# Artifact 1: Phân tích điểm mù (Blindspot Analysis)

**Người viết code tự rà soát (Self-Reflection):**

Sau khi nhận được phản hồi từ Reviewer, tôi nhận ra mình đã mắc phải các "điểm mù" nghiêm trọng trong quá trình viết hàm `demBookingChuaHuy`:

1. **Điểm mù về độ dài mảng & Dữ liệu rỗng (Biên/Mảng rỗng):** 
   - Tôi đã mặc định (assume) rằng mảng `bookings` lúc nào cũng có đúng 10 phần tử khi viết `i < 10`. 
   - **Rủi ro:** Nếu mảng truyền vào bị rỗng (`[]`) hoặc ít hơn 10 phần tử, code sẽ cố truy cập vào `bookings[i]` (ví dụ `bookings[9]`) dẫn đến lỗi crash ứng dụng (`Cannot read properties of undefined`). Nếu mảng có 20 booking, hàm sẽ đếm thiếu 10 booking cuối. Tôi đã quên hoàn toàn việc dùng `bookings.length`.

2. **Điểm mù về tính linh hoạt (Magic Number/String):**
   - Tôi đã "hardcode" chuỗi ngày `"2026-07-27"` thẳng vào điều kiện if, trong khi hàm có nhận tham số `ngayLoc`.
   - **Rủi ro:** Hàm này hiện tại bị "chết cứng", chỉ dùng được cho đúng một ngày duy nhất. Nó không đáp ứng được yêu cầu "lọc theo ngày bất kỳ" của chủ Spa Sen.

**Kết luận:** Code cần được refactor để kiểm tra tính hợp lệ của mảng đầu vào, sử dụng `bookings.length` cho vòng lặp, và thay thế ngày hardcode bằng tham số `ngayLoc`.