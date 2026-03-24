import room1 from "@/assets/room1.jpg";
import room2 from "@/assets/room2.jpg";
import room3 from "@/assets/room3.jpg";
import room4 from "@/assets/room4.jpg";

export interface Room {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  images: string[];
  guests: number;
  size: number;
  features: string[];
}

export const rooms: Room[] = [
  {
    id: "deluxe-sea-view",
    name: "Deluxe Sea View Suite",
    description: "Spacious suite with panoramic sea views, king bed, and private balcony.",
    longDescription: "Indulge in the ultimate coastal retreat with our Deluxe Sea View Suite. Wake up to breathtaking panoramic views of the Adriatic Sea from your private balcony. The suite features a luxurious king-size bed with premium linens, a spacious living area, and a modern en-suite bathroom with a rain shower. Perfect for couples seeking a romantic getaway.",
    price: 120,
    image: room1,
    images: [room1, room2],
    guests: 2,
    size: 45,
    features: ["Sea View", "King Bed", "Private Balcony", "Air Conditioning", "Free WiFi", "Mini Bar"],
  },
  {
    id: "premium-apartment",
    name: "Premium Family Apartment",
    description: "Elegant two-bedroom apartment with living room and full kitchen.",
    longDescription: "Our Premium Family Apartment offers the perfect blend of luxury and comfort for families. Featuring two beautifully appointed bedrooms, a spacious living room with sea views, and a fully equipped modern kitchen. The apartment includes a dining area, two bathrooms, and a large balcony — ideal for families looking for a home away from home.",
    price: 180,
    image: room2,
    images: [room2, room4],
    guests: 5,
    size: 75,
    features: ["Two Bedrooms", "Full Kitchen", "Living Room", "Sea View", "Air Conditioning", "Free WiFi"],
  },
  {
    id: "cozy-studio",
    name: "Cozy Studio",
    description: "Modern studio with kitchenette, perfect for solo travelers or couples.",
    longDescription: "Our Cozy Studio is a beautifully designed compact space that offers everything you need for a comfortable stay. Featuring a comfortable double bed, a modern kitchenette with essential appliances, and a stylish bathroom. The warm, natural-toned interior creates a welcoming atmosphere for solo travelers and couples.",
    price: 65,
    image: room3,
    images: [room3, room1],
    guests: 2,
    size: 30,
    features: ["Kitchenette", "Double Bed", "Air Conditioning", "Free WiFi", "Smart TV"],
  },
  {
    id: "superior-apartment",
    name: "Superior Apartment",
    description: "Bright and spacious apartment with two bedrooms and city views.",
    longDescription: "The Superior Apartment offers a generous living space flooded with natural light. With two comfortable bedrooms, a bright living room with stunning city and partial sea views, and a fully equipped kitchen, this apartment is ideal for longer stays. The contemporary design and premium furnishings ensure a memorable experience.",
    price: 140,
    image: room4,
    images: [room4, room3],
    guests: 4,
    size: 60,
    features: ["Two Bedrooms", "City View", "Full Kitchen", "Balcony", "Air Conditioning", "Free WiFi"],
  },
];
