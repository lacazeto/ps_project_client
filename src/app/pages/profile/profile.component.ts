import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  isRegisterClicker = false;
  user = null;

  constructor(private authentication: AuthenticationService) { }

  ngOnInit() {
    this.user = this.authentication.getUser();
  }

  registerPet () {
    this.isRegisterClicker = !this.isRegisterClicker;
  }
}
