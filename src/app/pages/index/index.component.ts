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

  places: Array<{}> = [];
  searchPlace = {
    type_accepted: "",
    city: "",
    price: null
  };

  types = [
    { value: "Dog", display: "Dog" },
    { value: "Cat", display: "Cat" },
    { value: "Any", display: "Any" }
  ];

  user: User;

  constructor(private connectApiService: ConnectApiService,
    private authentication: AuthenticationService) { }

  ngOnInit() {
    this.connectApiService.getRandomPlaces()
      .then((result) => {
        result.forEach(element => {
          if (this.user) {
            if (element.isEnabled === true && element.owner !== this.user._id) {
              this.places.push(element);
            }
          }
          else {
            this.places.push(element);
          }
        });
      });
    this.user = this.authentication.getUser();
  }

  searchPlaces () {
    this.searchPlace.city = this.searchPlace.city.toLowerCase();
    this.connectApiService.userSearchPlaces(this.searchPlace)
      .then((result) => { this.places = result; });
  }
}
