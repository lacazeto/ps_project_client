import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class AuthenticationService {

  baseUrl = "http://localhost:3000";

  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(this.baseUrl + "/auth/signup", user)
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(user) {
    return this.http.post(this.baseUrl + "/auth/login", user)
      .map(res => res.json())
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(this.baseUrl + "/auth/logout", {})
      .map(res => res.json())
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(this.baseUrl + "/auth/loggedin")
      .map(res => res.json())
      .catch(this.handleError);
  }

}
