import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { User } from "../models/user.model";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class AuthenticationService {

  /* private loaded = false;
  private user: User;
  private userChange: Subject<User | null> = new Subject(); */

  // Observable string stream
  /* userChange$ = this.userChange.asObservable(); */

  baseUrl = "http://localhost:3000";

  constructor(private http: Http) { }

  /* private setUser(user: User = null) {
    this.loaded = true;
    this.user = user;
    this.userChange.next(user);
  } */


  signup(user) {
    return this.http.post(this.baseUrl + "/auth/signup", user)
      .map(res => res.json());
  }

  login(user) {
    return this.http.post(this.baseUrl + "/auth/login", user)
      .map(res => res.json());
  }

  logout() {
    return this.http.post(this.baseUrl + "/auth/logout", {})
      .map((res => res.json()));
  }

  isLoggedIn() {
    return this.http.get(this.baseUrl + "/auth/loggedin")
      .toPromise()
      .then(res => res.json())
      .catch((err) => {
        if (err.status === 404) {
          return err;
        }
      });
  }
}
