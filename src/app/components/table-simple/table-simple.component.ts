import { Component, OnInit } from '@angular/core';
import { Car } from "src/app/interfaces/car"
import {CarService} from "src/app//services/car.service";

@Component({
  selector: 'app-table-simple',
  templateUrl: './table-simple.component.html',
  styles: [
  ]
})
export class TableSimpleComponent implements OnInit {


  cars: Car[];
  cols: any[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => {
      console.log(cars);
      this.cars = cars
    });
    this.cols = [
      { field: 'vin', header: 'Vin', type: 'text' },
      { field: 'year', header: 'Year', type: 'text' },
      { field: 'brand', header: 'Brand', type: 'text' },
      { field: 'color', header: 'Color', type: 'text' },
      { field: 'a', header: 'A', type: 'checkbox' },
      { field: 'b', header: 'B', type: 'checkbox' },
    ];
  }

  // logFunction($event: any) {
  //   console.log(this.cars);
  //
  // }
}
