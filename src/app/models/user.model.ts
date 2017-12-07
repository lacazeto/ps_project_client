export class User {
    id: string;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    constructor(obj: Object = {}) {
      Object.assign(this, obj);
    }
}
