const express = require("express");
const Bus = require("../models/Bus");
const Booking = require("../models/Booking");
const Payment = require("../models/Payment");
const User = require("../models/User");

const router = express.Router();

const getTodayRange = () => {
  const now = new Date();
  const start = new Date(now);
  start.setHours(0, 0, 0, 0);
  const end = new Date(now);
  end.setHours(23, 59, 59, 999);
  return { start, end };
};

router.get("/dashboard", async (req, res) => {
  try {
    const { start, end } = getTodayRange();

    const totalBuses = await Bus.countDocuments({ isActive: true });
    const bookingsToday = await Booking.find({ bookingDate: { $gte: start, $lte: end } });
    const paidBookings = bookingsToday.filter((booking) => booking.paymentStatus === "paid");

    const totalRevenue = paidBookings.reduce((sum, booking) => sum + booking.totalPrice, 0);
    const totalDiscount = paidBookings.reduce((sum, booking) => sum + (booking.discountApplied || 0), 0);

    res.json({
      totals: {
        busesRunningToday: totalBuses,
        bookingsToday: bookingsToday.length,
        revenueToday: totalRevenue,
        discountToday: totalDiscount,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "FAILED_TO_GET_DASHBOARD" });
  }
});

router.get("/vendors", async (req, res) => {
  try {
    const vendors = await User.find({ role: "vendor" });
    const items = await Promise.all(
      vendors.map(async (vendor) => {
        const vendorBuses = await Bus.find({ vendorId: vendor._id }).select("_id");
        const busIds = vendorBuses.map((bus) => bus._id);
        const busCount = busIds.length;
        const bookings = await Booking.find({ paymentStatus: "paid", busId: { $in: busIds } });
        const revenue = bookings.reduce((sum, booking) => sum + booking.totalPrice, 0);
        return {
          id: vendor._id,
          name: vendor.name,
          email: vendor.email,
          isActive: vendor.isActive,
          buses: busCount,
          revenue,
        };
      })
    );

    res.json({ items });
  } catch (error) {
    res.status(500).json({ error: "FAILED_TO_LIST_VENDORS" });
  }
});

router.get("/routes", async (req, res) => {
  try {
    const buses = await Bus.find({ isActive: true });
    const bookings = await Booking.find({ paymentStatus: "paid" }).populate("busId");

    const routeStats = {};
    buses.forEach((bus) => {
      const key = `${bus.origin}→${bus.destination}`;
      if (!routeStats[key]) {
        routeStats[key] = { route: key, buses: 0, seatsSold: 0, revenue: 0, averagePrice: 0 };
      }
      routeStats[key].buses += 1;
    });

    bookings.forEach((booking) => {
      const bus = booking.busId;
      if (!bus) return;
      const key = `${bus.origin}→${bus.destination}`;
      if (!routeStats[key]) {
        routeStats[key] = { route: key, buses: 0, seatsSold: 0, revenue: 0, averagePrice: 0 };
      }
      routeStats[key].seatsSold += booking.seats.length;
      routeStats[key].revenue += booking.totalPrice;
    });

    Object.values(routeStats).forEach((stat) => {
      stat.averagePrice = stat.seatsSold > 0 ? Number((stat.revenue / stat.seatsSold).toFixed(2)) : 0;
    });

    res.json({ items: Object.values(routeStats) });
  } catch (error) {
    res.status(500).json({ error: "FAILED_TO_GET_ROUTES" });
  }
});

router.get("/payments", async (req, res) => {
  try {
    const items = await Payment.find().sort({ createdAt: -1 }).limit(200);
    res.json({ items });
  } catch (error) {
    res.status(500).json({ error: "FAILED_TO_LIST_PAYMENTS" });
  }
});

router.get("/export/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find().populate("busId userId").lean();
    
    if (bookings.length === 0) {
      return res.json({ csv: "bookingId,userId,busId,route,seats,totalPrice,paymentStatus,bookingDate\n" });
    }

    const headers = ["bookingId", "userId", "busId", "route", "seats", "totalPrice", "paymentStatus", "bookingDate"];
    const rows = bookings.map((booking) => [
      booking._id,
      booking.userId || "N/A",
      booking.busId?._id || "N/A",
      booking.busId ? `${booking.busId.origin}→${booking.busId.destination}` : "N/A",
      booking.seats.join("|"),
      booking.totalPrice,
      booking.paymentStatus,
      new Date(booking.bookingDate).toLocaleString(),
    ]);

    const csv = [headers.join(","), ...rows.map((row) => row.map((cell) => `"${cell}"`).join(","))].join("\n");

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=bookings.csv");
    res.send(csv);
  } catch (error) {
    res.status(500).json({ error: "FAILED_TO_EXPORT" });
  }
});

router.get("/export/payments", async (req, res) => {
  try {
    const payments = await Payment.find().populate("bookingId").lean();

    if (payments.length === 0) {
      return res.json({ csv: "paymentId,bookingId,amount,method,status,createdAt\n" });
    }

    const headers = ["paymentId", "bookingId", "amount", "method", "status", "createdAt"];
    const rows = payments.map((payment) => [
      payment._id,
      payment.bookingId || "N/A",
      payment.amount,
      payment.method,
      payment.status,
      new Date(payment.createdAt).toLocaleString(),
    ]);

    const csv = [headers.join(","), ...rows.map((row) => row.map((cell) => `"${cell}"`).join(","))].join("\n");

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=payments.csv");
    res.send(csv);
  } catch (error) {
    res.status(500).json({ error: "FAILED_TO_EXPORT" });
  }
});

module.exports = router;
