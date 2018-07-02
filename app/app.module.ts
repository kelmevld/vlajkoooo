import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { appRoutes } from "./app.router";
import HomeComponent from "./pages/home/home.component";
import { ReactiveFormsModule } from "@angular/forms";
import RegisterComponent from "./pages/register/register.component";
import { HttpModule } from "@angular/http";
import LoginComponent from "./pages/login/login.component";
import {RegisterService} from "./services/register.service";
import {LoginService} from "./services/login.service";
import {AddMarkaService} from "./services/addmarka.service";
import AddMarkaComponent from "./pages/addmarka/addmarka.component";
import MarkeService from "./services/marke.service";
import MarkeComponent from "./pages/marke/marke.component";
import { AddModelComponent } from './pages/add-model/add-model.component';
import { ShowModelsComponent } from './show-models/show-models.component';
import { ManageCarsComponent } from './pages/manage-cars/manage-cars.component';
import { EditCarComponent } from './pages/manage-cars/edit-car/edit-car.component';

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule, HttpModule ],
  declarations: [ AppComponent, HomeComponent, RegisterComponent, LoginComponent, AddMarkaComponent, MarkeComponent, AddModelComponent, ShowModelsComponent, ManageCarsComponent, EditCarComponent],
  providers: [ RegisterService, LoginService, AddMarkaService, MarkeService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {


}
