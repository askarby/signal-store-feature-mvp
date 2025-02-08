export interface Address {
  street: string;
  city: string;
}

export interface User {
  id: number;
  name: string;
  age: number;
  address: Address;
}
