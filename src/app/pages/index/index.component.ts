import { Component, OnInit } from "@angular/core";
import { AsyncPipe } from "@angular/common";
import { ConnectApiService } from "../../services/connect-api.service";
import { AuthenticationService } from "../../services/authentication.service";
import { User } from "../../models/user.model";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"]
})
export class IndexComponent implements OnInit {

  places: Promise<string> = null;
  userInfo = new User({
    userName: "",
    password: ""
  });
  error: Object = null;

  constructor(private connectApiService: ConnectApiService,
    private authentication: AuthenticationService) { }

  ngOnInit() {
    this.places = this.connectApiService.getRandomPlaces()
    /* this.authentication.isLoggedIn()
    .then(
      (user) => {
        this.userInfo = user;
        this.error = null;
      }); */
  }


}
