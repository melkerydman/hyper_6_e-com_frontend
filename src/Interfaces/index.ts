// Interface
export interface ICart {
  isShowing: boolean;
  items: ICartItem[];
  totalQuantity: number;
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
