export class User {
    _id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    constructor(obj: Object = {}) {
      Object.assign(this, obj);
    }
}
