import "rxjs/Rx"
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {
  private backend_url = environment.backend_url;

  constructor(private http: Http) { }

  get = {
    location: (id) => {
      return this.http.get(`${this.backend_url}/locations/${id}`).map(response => {
        return response.json();
      }).toPromise();
    },
    location_v2: (id) => {
      return this.http.get(`${this.backend_url}/v2/locations/${id}`).map(response => {
        return response.json();
      }).toPromise();
    },
    locations: () => {
      return this.http.get(`${this.backend_url}/locations`).map(response => {
        return response.json();
      }).toPromise();
    }
  }
}
