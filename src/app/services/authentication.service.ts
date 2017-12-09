import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { User } from "../models/user.model";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class AuthenticationService {

  private loaded = false;
  private user: User;
  private userChange: Subject<User | null> = new Subject();

  // Observable string stream
  userChange$ = this.userChange.asObservable();

  baseUrl = "http://localhost:3000";

  constructor(private http: Http) { }

  private setUser(user: User = null) {
    this.loaded = true;
    this.user = user;
    this.userChange.next(user);
  }


  signup(user) {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(this.baseUrl + "/auth/signup", user, options)
      .map(res => {
        this.setUser(new User(res.json()));
        return user;
      });
    }


  login(user) {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(this.baseUrl + "/auth/login", user, options)
    .map(res => {
      this.setUser(new User(res.json()));
      return user;
    });
  }

  logout() {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(this.baseUrl + "/auth/logout", {}, options)
      .map(res => {
        this.setUser();
        return null;
      });
  }

  isLoggedIn() {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(this.baseUrl + "/auth/loggedin", options)
      .toPromise()
      .then(res => {
        const user = new User(res.json());
        this.setUser(user);
        return user;
      })
      .catch((err) => {
        if (err.status === 404) {
          return err;
        }
      });
  }

  getUser() {
    return this.user;
  }
}
