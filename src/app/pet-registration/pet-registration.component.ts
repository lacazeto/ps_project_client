import { Component, EventEmitter, Output, OnInit } from "@angular/core";
import { ConnectApiService } from "../services/connect-api.service";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: "app-pet-registration",
  templateUrl: "./pet-registration.component.html",
  styleUrls: ["./pet-registration.component.css"]
})
export class PetRegistrationComponent implements OnInit {

  @Output() hide = new EventEmitter<string>();

  types = [
    { value: "Dog", display: "Dog" },
    { value: "Cat", display: "Cat" },
  ];

  pet = {
    owner: "",
    name: "",
    type: this.types[0].value
  };

  constructor(private activatedRoute: ActivatedRoute,
    private connectApiService: ConnectApiService) { }

  ngOnInit() {
  }

  handleHideForm() {
    this.hide.emit();
  }

  createPet () {
    this.activatedRoute.params
      .subscribe((params) => {
        this.pet.owner = params.id;
        this.connectApiService.registerPet(this.pet)
          .then(() => this.handleHideForm());
      });
  }
}
