import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import "rxjs/add/operator/toPromise";

@Injectable()
export class ConnectApiService {

  baseUrl = "http://localhost:3000";

  constructor(private http: Http) { }

  getRandomPlaces (): Promise<any>  {
    return this.http.get(this.baseUrl + "/place")
      .toPromise()
      .then((res: Response) => res.json())
      .catch(err => {
        console.log(err);
        return Promise.reject(err);
      });
  }

  getPlace (placeId) {
    return this.http.get(this.baseUrl + `/place/${placeId}`)
      .toPromise()
      .then((res: Response) => res.json())
      .catch(err => {
        console.log(err);
        return Promise.reject(err);
      });
  }

  registerPet (pet) {
    return this.http.post(this.baseUrl + "/pet", pet)
      .toPromise()
      .then((res: Response) => res.json())
      .catch(err => {
        console.log(err);
        throw err;
      });
  }

  getPetsFromUser (ownerId) {
    return this.http.get(this.baseUrl + `/pet/${ownerId}`)
    .toPromise()
    .then((res: Response) => res.json())
    .catch(err => {
      console.log(err);
      throw err;
    });
  }

  deletePet () {
    return this.http.delete(this.baseUrl + "/pet")
    .toPromise()
    .then((res: Response) => res.json())
    .catch(err => {
      console.log(err);
      throw err;
    });
  }
}
