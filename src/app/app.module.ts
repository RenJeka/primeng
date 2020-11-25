import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { TableSimpleComponent } from './components/table-simple/table-simple.component';
import {TableModule} from 'primeng-lts/table';
import {CarService} from "./services/car.service";
import {HttpClientModule} from "@angular/common/http";
import {CheckboxModule} from 'primeng-lts/checkbox';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TableSimpleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    TableModule,
    CheckboxModule,
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
