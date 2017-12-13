import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import "rxjs/add/operator/toPromise";

@Injectable()
export class ConnectApiService {

  baseUrl = "http://localhost:3000";

  constructor(private http: Http) { }

  // --- PLACES FUNCTIONS
  getRandomPlaces (): Promise<any>  {
    return this.http.get(this.baseUrl + "/place")
      .toPromise()
      .then((res: Response) => res.json())
      .catch(err => {
        console.log(err);
        return Promise.reject(err);
      });
  }

  userSearchPlaces (search): Promise<any>  {
    return this.http.post(this.baseUrl + "/place/search", search)
      .toPromise()
      .then((res: Response) => res.json())
      .catch(err => {
        console.log(err);
        return Promise.reject(err);
      });
  }

  getUserPlaces (userID): Promise<any>  {
    return this.http.get(this.baseUrl + `/place/user/${userID}`)
      .toPromise()
      .then((res: Response) => res.json())
      .catch(err => {
        console.log(err);
        return Promise.reject(err);
      });
  }

  registerPlace (place) {
    return this.http.post(this.baseUrl + "/place", place)
    .toPromise()
    .then((res: Response) => res.json())
    .catch(err => {
      console.log(err);
      throw err;
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

  deletePlace (placeId) {
    return this.http.put(this.baseUrl + "/place", placeId)
    .toPromise()
    .then((res: Response) => res.json())
    .catch(err => {
      console.log(err);
      throw err;
    });
  }

  // --- PETS FUNCTIONS
  registerPet (pet) {
    return this.http.post(this.baseUrl + "/pet", pet)
      .toPromise()
      .then((res: Response) => res.json())
      .catch(err => {
        console.log(err);
        throw err;
      });
  }

  getUserPets (ownerId) {
    return this.http.get(this.baseUrl + `/pet/${ownerId}`)
    .toPromise()
    .then((res: Response) => res.json())
    .catch(err => {
      console.log(err);
      throw err;
    });
  }

  deletePet (petId) {
    return this.http.delete(this.baseUrl + `/pet/${petId}`)
    .toPromise()
    .then((res: Response) => res.json())
    .catch(err => {
      console.log(err);
      throw err;
    });
  }

  // -- REQUESTS FUNCTIONS
  sendRequest (request) {
    return this.http.put(this.baseUrl + "/request", request)
    .toPromise()
    .then((res: Response) => res.json())
    .catch(err => {
      console.log(err);
      throw err;
    });
  }

  cancelRequestSubmission (ownerId) {
    return this.http.delete(this.baseUrl + "/request/cancel", ownerId)
    .toPromise()
    .then((res: Response) => res.json())
    .catch(err => {
      console.log(err);
      throw err;
    });
  }

  // -- USER FUNCTIONS
  getUserProfile (userId) {
    return this.http.get(this.baseUrl + `/profile/${userId}`)
      .toPromise()
      .then((res: Response) => res.json())
      .catch(err => {
        console.log(err);
        return Promise.reject(err);
      });
  }

}
