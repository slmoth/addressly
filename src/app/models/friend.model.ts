export interface IFriend {
    firstName: string;
    lastName: string;
    addressLine1: string;
    city: string;
    state: string;
    zip: string;
  }
  
  export class Friend implements IFriend {
    constructor(
        public firstName: string,
        public lastName: string,
        public addressLine1: string,
        public city: string,
        public state: string,
        public zip: string
      ) {}

      getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
      }
    
      getFullAddress(): string {
        return `${this.addressLine1}, ${this.city}, ${this.state} ${this.zip}`;
      }
  }