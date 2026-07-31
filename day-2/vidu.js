function demBookingChuaHuy(bookings, ngayLoc) {
    let count = 0;
    
    // Đoạn code này chứa 3 lỗi ngầm:
    for (let i = 0; i < 10; i++) { 
        if (bookings[i].ngay === "2026-07-27" && bookings[i].trangThai !== "Đã huỷ") {
            count++;
        }
    }
    return count;
}

const bookings = [
    {
        ngay: "2026-07-27",
        trangThai: "Đã xác nhận"
    },
    {
        ngay: "2026-07-27",
        trangThai: "Đã hủy"
    },
    {
        ngay: "2026-07-28",
        trangThai: "Đã xác nhận"
    }
];

console.log(
    demBookingChuaHuy(bookings, "2026-07-27")
);