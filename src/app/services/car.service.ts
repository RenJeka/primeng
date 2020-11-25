import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Car } from 'src/app/interfaces/car';

@Injectable()
export class CarService {

  constructor(private http: HttpClient) {}

  getCarsSmall() {
    return this.http.get('assets/customers-large.json')
      .toPromise()
      .then(res => <Car[]> res)
      .then(data => { return data});
  }
}
