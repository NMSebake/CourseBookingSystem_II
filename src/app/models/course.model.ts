export interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  date: string;
  soldOut?: boolean;
  onSale?: boolean;
  img?: any;
}
