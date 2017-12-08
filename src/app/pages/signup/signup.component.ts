import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";
import { User } from "../../models/user.model";
import { Router } from "@angular/router";
import "rxjs/add/operator/toPromise";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {

  userInfo = {
    username: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  error: string;


  constructor(private authentication: AuthenticationService, private router: Router) { }

  ngOnInit() {
    /*this.userInfo = this.authentication.isLoggedIn();*/
  }

  signup(form) {
    if (form.invalid) {
      return;
    }
    this.error = null;
    this.authentication.signup(this.userInfo)
      .subscribe(
      () => this.router.navigate(["/index"]),
      (err) => this.error = err
    );
  }
}

