import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";

import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

  formInfo = {
    username: "",
    password: "",
  };

  user: any = null;
  error: Object = null;

  constructor(private authentication: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authentication.login(this.formInfo)
      .subscribe(
        (user) => {
          this.user = user;
          this.router.navigate(["/index"]);
        },
        (err) => {
          console.log(err);
          this.error = err;
        }
      );
  }
}
