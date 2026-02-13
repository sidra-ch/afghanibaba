const mongoose = require("mongoose");
require("dotenv").config();

const Bus = require("../models/Bus");

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  console.error("MONGO_URI not set. Add it to backend/.env before seeding.");
  process.exit(1);
}

const companies = ["افغان‌گلف", "کلیدی تراول", "امان ترانسپورت", "شاه ترانس"];
const routes = [
  { origin: "کابل", destination: "مزار شریف", durationHours: 6 },
  { origin: "کابل", destination: "هرات", durationHours: 11 },
  { origin: "کابل", destination: "قندهار", durationHours: 10 },
  { origin: "هرات", destination: "کابل", durationHours: 11 },
];

const busTypes = ["VIP", "اقتصادی"];

const buildDate = (baseDate, hours) => {
  const date = new Date(baseDate);
  date.setHours(hours, 0, 0, 0);
  return date;
};

const makeSeedData = () => {
  const now = new Date();
  const seed = [];

  for (let dayOffset = 0; dayOffset < 7; dayOffset += 1) {
    const day = new Date(now);
    day.setDate(now.getDate() + dayOffset);

    routes.forEach((route, routeIndex) => {
      const company = companies[routeIndex % companies.length];
      const busType = busTypes[routeIndex % busTypes.length];
      const seats = busType === "VIP" ? 18 : 40;
      const departureHour = 7 + routeIndex * 2;
      const departureTime = buildDate(day, departureHour);
      const arrivalTime = new Date(departureTime);
      arrivalTime.setHours(arrivalTime.getHours() + route.durationHours);

      seed.push({
        company,
        origin: route.origin,
        destination: route.destination,
        departureTime,
        arrivalTime,
        price: busType === "VIP" ? 280 : 220,
        currency: "USD",
        seats,
        seatsAvailable: seats,
        busType,
        bookedSeats: [],
        isActive: true,
      });
    });
  }

  return seed;
};

const run = async () => {
  await mongoose.connect(mongoUri);
  console.log("MongoDB connected");

  const shouldReset = process.env.SEED_RESET === "true";
  const existingCount = await Bus.countDocuments();

  if (existingCount > 0 && !shouldReset) {
    console.log("Buses already exist. Set SEED_RESET=true to reseed.");
    await mongoose.disconnect();
    process.exit(0);
  }

  if (shouldReset) {
    await Bus.deleteMany({});
  }

  const items = makeSeedData();
  await Bus.insertMany(items);
  console.log(`Seeded ${items.length} buses.`);

  await mongoose.disconnect();
  process.exit(0);
};

run().catch((error) => {
  console.error("Seeding failed", error);
  process.exit(1);
});
