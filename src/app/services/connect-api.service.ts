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

  getPlace (id) {
    return this.http.get(this.baseUrl + `/place/${id}`)
      .toPromise()
      .then((res: Response) => res.json())
      .catch(err => {
        console.log(err);
        // throw err;
        return Promise.reject(err);
      });
  }

  registerPet (pet) {
    return this.http.post(this.baseUrl + "/pet", pet)
      .toPromise()
      .then(res => res.json());
  }
}
