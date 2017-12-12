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

  error: any = null;
  user: User;

  constructor(private connectApiService: ConnectApiService,
    private authentication: AuthenticationService) { }

  ngOnInit() {
    this.connectApiService.getRandomPlaces()
      .then((result) => {
        result.forEach(element => {
          if (element.isEnabled === true) {
            this.places.push(element);
          }
        });
      });
    this.user = this.authentication.getUser();
  }
}
