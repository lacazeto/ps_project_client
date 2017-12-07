import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";
import { Forms } from "../../models/forms.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {

  formInfo: Forms = {
    username: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  user: any = null;
  error: Object = null;


  constructor(private authentication: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  signup() {
    this.authentication.signup(this.formInfo)
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

