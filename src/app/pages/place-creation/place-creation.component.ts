import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";
import { ConnectApiService } from "../../services/connect-api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-place-creation",
  templateUrl: "./place-creation.component.html",
  styleUrls: ["./place-creation.component.css"]
})
export class PlaceCreationComponent implements OnInit {

  user = null;

  types = [
    { value: "Dog", display: "Dogs" },
    { value: "Cat", display: "Cats" },
    { value: "Any", display: "Any" }
  ];

  place = {
    owner: "",
    description: "",
    price: "",
    isEnabled: true,
    type: this.types[2].value
  };

  constructor(private authentication: AuthenticationService,
  private connectApiService: ConnectApiService,
  private router: Router) { }

  ngOnInit() {
    this.user = this.authentication.getUser();
    this.place.owner = this.user.id;
  }

  createPlace () {
    this.connectApiService.registerPlace(this.place)
      .then(() => this.router.navigate(["/index"]));
  }

}
