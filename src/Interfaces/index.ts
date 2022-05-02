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
  images: [string];
  // url: string;
  price: number;
  year: number;
  dimensions: string;
  edition: string;
  details: string;
  inStock: number;
}
export interface IOrder {
  _id: string;
  items: [ICart];
  amount: number;
  userInfo: {};
  orderStatus: { packed: boolean; dispatched: boolean };
}

export interface ICheckoutForm {
  firstName: string;
  lastName: string;
  country: string;
  street: string;
  city: string;
  postalCode: string;
  phone: string;
  email: string;
}
