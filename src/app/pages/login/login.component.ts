import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";
import { User } from "../../models/user.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

  userInfo = {
    username: "",
    password: ""
  };

  error: string;

  constructor(private authentication: AuthenticationService, private router: Router) { }

  ngOnInit() {
    /* this.authentication.isLoggedIn()
    .then(
      (user) => {
        this.userInfo = user;
        this.error = null;
      }); */
  }

  login(form) {
    this.authentication.login(this.userInfo)
      .subscribe(
        (user) => this.router.navigate(["/index"]),
        (err) => {
          console.log(err);
          this.error = err;
        }
      );
  }
}
