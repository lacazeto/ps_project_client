import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthenticationService } from "../../services/authentication.service";
import { ConnectApiService } from "../../services/connect-api.service";

@Component({
  selector: "app-place",
  templateUrl: "./place.component.html",
  styleUrls: ["./place.component.css"]
})
export class PlaceComponent implements OnInit {

  place: {} = null;
  user = null;
  error: string;

  constructor(private authentication: AuthenticationService,
    private activatedRoute: ActivatedRoute,
    private connectApiService: ConnectApiService) { }

  ngOnInit() {
    this.user = this.authentication.getUser();
    this.activatedRoute.params
    .subscribe((params) => {
     this.connectApiService.getPlace(params.id)
      .then(place => {
        this.place = place;
        console.log(this.place);
      });
    });
  }

}
