import { Component, OnInit } from '@angular/core';
import { Car } from "src/app/interfaces/car"
import {CarService} from "src/app//services/car.service";

@Component({
  selector: 'app-table-simple',
  templateUrl: './table-simple.component.html',

})
export class TableSimpleComponent implements OnInit {

  test1 = true;
  test2 = true;

  cars: Car[];
  cols: any[];
  frCols: any[];
  myDropdownOptions: any[] = [
    {'a':'lala-1'},
    {'a':'lala-2'},
    {'a':'lala-3'},
    {'a':'lala-4'},
  ];
  myDropdownChosenOption = '';
  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCarsSmall().then(cars => {
      console.log(cars);
      this.cars = cars
    });
    this.cols = [
      { field: 'year', header: 'Year', type: 'text' },
      { field: 'brand', header: 'Brand', type: 'text' },
      { field: 'color', header: 'Color', type: 'text' },
      { field: 'a', header: 'A', type: 'checkbox' },
      { field: 'b', header: 'B', type: 'checkbox' },
      { field: 'c', header: 'C', type: 'checkbox' },
      { field: 'd', header: 'D', type: 'checkbox' },
      { field: 'e', header: 'E', type: 'text' },
    ];

    this.frCols = [
      {field: 'vin', header: 'Vin', type: 'text' }
    ];

  }

  // logFunction($event: any) {
  //   console.log(this.cars);
  //
  // }

  public logDropDown(){
    console.log(this.myDropdownChosenOption);
  }
}
