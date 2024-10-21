export type ProductType = {
  id?: string;
  userId?: string;
  title: string;
  description: string;
  location: string;
  price: number;
  category: TypeCategory;
  image: string;
};

export type TypeCategory =
  | "Cars"
  | "Properties"
  | "Mobiles"
  | "Jobs"
  | "Bikes"
  | "Electronics & Appliances"
  | "Furniture"
  | "Fashion"
  | "Books, Sports & Hobbies"
  | "Pets"
  | "Services";


