// Interface
export interface ICart {
  items: ICartItem[];
  totalQuantity: number;
  totalPrice: number;
}

export interface ICartItem extends IProduct {
  quantity: number;
}
export interface IProduct {
  _id: string;
  title: string;
  exhibition: string;
  artist: string;
  url: string;
  price: number;
  year: number;
  dimensions: string;
  edition: string;
  details: string;
  inStock: number;
}
