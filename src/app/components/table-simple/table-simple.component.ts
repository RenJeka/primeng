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
  selectedValues: string[] = [];
  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => {
      console.log(cars);
      this.cars = cars
    });
  }

}
