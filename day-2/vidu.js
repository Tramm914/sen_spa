function demBookingChuaHuy(bookings, ngay) {
    return bookings.filter(function (booking) {
        return booking.ngay === ngay && booking.trangThai !== "Đã hủy";
    }).length;
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