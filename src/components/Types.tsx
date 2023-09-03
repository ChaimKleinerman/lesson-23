interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    geo: Geo;
  }
  
  interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  }
  
  interface Geo {
    lat: string;
    lng: string;
  }
export type{User}  