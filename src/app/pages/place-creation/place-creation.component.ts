import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";

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
    { value: "Any", display: "Any" },
  ];

  place = {
    owner: "",
    description: "",
    isEnabled: true,
    type: this.types[2].value
  };

  constructor(private authentication: AuthenticationService) { }

  ngOnInit() {
    this.user = this.authentication.getUser();
  }

  createPlace () {}

}
