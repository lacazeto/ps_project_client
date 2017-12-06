import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";
import { Forms } from "../../models/forms.model";

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
  error: string = null;


  constructor(private authentication: AuthenticationService) { }

  ngOnInit() {
  }

  signup() {
    this.authentication.signup(this.formInfo)
      .subscribe(
        (user) => this.user = user,
        (err) => console.log(err)
      );
  }
}

