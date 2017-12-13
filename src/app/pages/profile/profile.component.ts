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
  myReceivedRequests: Array<{}> = [];
  myReceivApprovReq: Array<{}> = [];

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
        result.forEach(place => {
          if (place.isEnabled === true) {
            this.myPlaces.push(place);
            if (place.requests) {
              this.myReceivedRequests = [];
              this.myReceivApprovReq = [];
              place.requests.forEach(request => {
                switch (request.status) {
                  case "Pending":
                    request.user = request.owner;
                    request.place_id = place._id;
                    this.myReceivedRequests.push(request);
                  break;
                  case "Accepted":
                    request.user = request.owner;
                    request.place_id = place._id;
                    this.myReceivApprovReq.push(request);
                  break;
                }
              });
            }
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
