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

  userInfo = new User ({
    username: "",
    password: ""
  });

  user = null;
  error: string;

  constructor(private authentication: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.user = this.authentication.getUser();
  }

  login(form) {
    this.authentication.login(this.userInfo)
      .subscribe(
        (user) => this.router.navigate(["/index"]),
        (err) => {
          this.error = err.json().message;
        }
      );
  }
}
