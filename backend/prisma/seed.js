import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const products = [
  { name: "Hike", price: 89.99, image: "/images/banner2.jpg", description: "Conquer mountains, or at least the stairs to your room." },
  { name: "Nkie", price: 39.99, image: "/images/banner3.jpg", description: "The spirit of running... but slower, cheaper, and slightly off-brand." },
  { name: "Prongles", price: 59.99, image: "/images/banner4.jpeg", description: "Once you pop, you’ll question every snack choice you’ve ever made." },
  { name: "Dave", price: 499.99, image: "/images/banner5.jpeg", description: "Nobody knows what it is. Everyone knows it’s powerful. Be like Dave." },
  { name: "Nut Master", price: 29.99, image: "/images/banner6.jpg", description: "For true professionals in the art of spreading joy (and peanuts)." },
  { name: "Crust", price: 19.99, image: "/images/banner7.jpg", description: "The bread that stayed behind. Tough, chewy, and oddly inspiring." },
  { name: "WhatsApp Perfume", price: 24.99, image: "/images/banner8.jpg", description: "Smells like typing... and then not replying." },
  { name: "Mike Glove", price: 149.99, image: "/images/banner9.jpg", description: "The glove that punches back — mostly your wallet." },
  { name: "Game Pudding", price: 89.99, image: "/images/banner10.jpg", description: "Fuel your next gaming session with 100% pudding-based energy." },
  { name: "Surprise", price: 59.99, image: "/images/banner11.jpg", description: "You won’t know what it is. We won’t either. That’s the fun part." },
  { name: "The North Fake", price: 99.99, image: "/images/banner12.jpg", description: "Adventure-ready jacket for people who only hike to Starbucks." },
  { name: "H&M", price: 79.99, image: "/images/banner13.jpg", description: "Hot & Mid — perfect for three washes before retirement." },
  { name: "Cereo", price: 119.99, image: "/images/banner14.jpg", description: "Now with 20% more air and 0% real cereal integrity." },
  { name: "FrostedFlakes", price: 39.99, image: "/images/banner 15.jpg", description: "They’re fine. Tony’s distant cousin Terry approves." },
  { name: "Peepi", price: 34.99, image: "/images/banner 16.jpg", description: "Hydration so cold, it might end friendships." },
  { name: "SpiderMan Toy", price: 69.99, image: "/images/banner 17.jpg", description: "Shoots webs. Or maybe string cheese. We’re not sure anymore." },
  { name: "Sqny", price: 44.99, image: "/images/banner 18.jpg", description: "Experience sound so generic, it’s almost nostalgic." },
  { name: "Crispy Hexagons", price: 24.99, image: "/images/banner 19.jpg", description: "The perfect cereal for people who hate circles and flavor." },
  { name: "Leog", price: 49.99, image: "/images/banner 20.jpg", description: "Build creativity. Step on one. Regret every decision." },
  { name: "KatKot", price: 199.99, image: "/images/banner 21.jpg", description: "For short videos and shorter attention spans." },
  { name: "Baby Yuda", price: 129.99, image: "/images/banner 22.jpg", description: "Cuter than copyright law allows." },
  { name: "Calvin Klain", price: 59.99, image: "/images/banner 23.jpg", description: "Underwear so fake it’s emotionally honest." },
  { name: "The Incredible SpiderBat", price: 299.99, image: "/images/banner 24.jpg", description: "Half bat, half spider, fully lawsuit material." },
  { name: "Under Arms", price: 349.99, image: "/images/banner 25.jpg", description: "Smells like determination and mild regret." },
  { name: "Viotcrla, S Secrete", price: 89.99, image: "/images/banner 26.jpg", description: "It’s not Victoria’s, but the mystery remains." },
  { name: "Marshmallows&Stars", price: 69.99, image: "/images/banner 27.jpg", description: "Breakfast of champions — and confused astronauts." },
  { name: "Crocodile", price: 159.99, image: "/images/banner 28.jpg", description: "Elegance, power, and a logo that might bite back." },
];

async function main() {
  console.log("🌱 Seeding products...");
  for (const p of products) {
    await prisma.product.create({ data: p });
  }
  console.log("✅ Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
