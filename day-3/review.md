# Báo Cáo Review Code - Bài 3 (Spa Sen)

**PR được review:** feat/d2-cai-tien (Cải tiến hàm đếm booking chưa huỷ)

Dưới đây là danh sách 3 bug được phát hiện trong quá trình rà soát code:

### Bug 1: Lỗi vòng lặp cố định
- **Đoạn code lỗi:** `for (let i = 0; i < 10; i++)`
- **Họ bug:** Magic number / Biên (Boundary)
- **Vì sao sai:** Lập trình viên tự fix cứng số `10`. Nếu danh sách `bookings` truyền vào chỉ có 5 phần tử, vòng lặp chạy đến `i = 5` sẽ văng lỗi vì không tìm thấy dữ liệu (undefined). Nếu mảng có 20 phần tử, nó sẽ đếm thiếu 10 phần tử cuối.
- **Đề xuất sửa:** Đổi số `10` thành `bookings.length` để vòng lặp tự động điều chỉnh theo kích thước mảng thật.
  *Code sửa:* `for (let i = 0; i < bookings.length; i++)`

### Bug 2: Lỗi giá trị chết (Hardcode chuỗi)
- **Đoạn code lỗi:** `if (bookings[i].ngay === "2026-07-27" ...)`
- **Họ bug:** Giá trị ma thuật (Magic String)
- **Vì sao sai:** Hàm có tham số `ngayLoc` truyền vào để lọc linh hoạt, nhưng người code lại không dùng mà gõ cứng chuỗi ngày `"2026-07-27"`. Điều này khiến hàm bị liệt, ngày nào gọi nó cũng chỉ đếm cho đúng ngày 27/07/2026.
- **Đề xuất sửa:** Thay chuỗi cứng bằng biến tham số `ngayLoc`.
  *Code sửa:* `if (bookings[i].ngay === ngayLoc && bookings[i].trangThai !== "Đã huỷ")`

### Bug 3: Không kiểm tra dữ liệu đầu vào
- **Đoạn code lỗi:** Trực tiếp chạy vòng lặp và truy cập `bookings[i]` mà không kiểm tra biến `bookings`.
- **Họ bug:** Dữ liệu rỗng / Null
- **Vì sao sai:** Nếu vì lý do nào đó (lỗi mạng, dữ liệu rỗng) mà biến `bookings` trả về `null` hoặc `undefined`, đoạn code `bookings[i]` sẽ làm sập (crash) toàn bộ chương trình ngay lập tức.
- **Đề xuất sửa:** Bổ sung một dòng kiểm tra an toàn ngay đầu hàm, trước khi chạy vòng lặp for.
  *Code sửa:* `if (!bookings || bookings.length === 0) return 0;`

---
### 🔴 KẾT LUẬN REVIEW: **Request Changes**
**Lý do:** Code hiện tại chứa nhiều lỗi logic cơ bản, có khả năng cao gây crash ứng dụng nếu dữ liệu thực tế thay đổi. Yêu cầu tác giả (Dev) sửa lại cả 3 lỗi trên, test cẩn thận với mảng rỗng và độ dài khác nhau rồi mới được merge vào nhánh `main`.