export class User {
    id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    constructor(obj: Object = {}) {
      Object.assign(this, obj);
    }
}
