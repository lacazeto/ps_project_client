import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "app-place-creation",
  templateUrl: "./place-creation.component.html",
  styleUrls: ["./place-creation.component.css"]
})
export class PlaceCreationComponent implements OnInit {

  user = null;

  constructor(private authentication: AuthenticationService) { }

  ngOnInit() {
    this.user = this.authentication.getUser();
  }

}
