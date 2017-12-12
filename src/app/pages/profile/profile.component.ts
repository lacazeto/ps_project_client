import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";
import { ActivatedRoute } from "@angular/router";
import { ConnectApiService } from "../../services/connect-api.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  isRegisterClicker = false;
  user = null;
  myPets: Array<{}> = null;
  myPlaces: Array<{}> = [];

  constructor(private authentication: AuthenticationService,
    private activatedRoute: ActivatedRoute,
    private connectApiService: ConnectApiService) { }

  updateInfo() {
    this.activatedRoute.params
    .subscribe((params) => {
      this.connectApiService.getUserPets(params.id)
      .then((result) => {
        this.myPets = result;
      });
      this.connectApiService.getUserPlaces(params.id)
      .then((result) => {
        this.myPlaces = [];
        result.forEach(element => {
          if (element.isEnabled === true) {
            this.myPlaces.push(element);
          }
        });
      });
    });
  }

  ngOnInit() {
    this.user = this.authentication.getUser();
    this.updateInfo();
  }

  registerPet () {
    this.updateInfo();
    this.isRegisterClicker = !this.isRegisterClicker;
  }

  deletePet (petId) {
    this.connectApiService.deletePet(petId)
      .then((res) => { this.updateInfo(); } )
      .catch((err) => {
          console.log(err);
        }
      );
  }

  deletePlace (placeId) {
    this.connectApiService.deletePlace({_id: placeId})
      .then((res) => { this.updateInfo(); } )
      .catch((err) => {
          console.log(err);
        }
      );
  }

}
