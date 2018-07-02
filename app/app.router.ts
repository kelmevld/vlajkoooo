import { Routes } from '@angular/router';
import HomeComponent from "./pages/home/home.component";
import RegisterComponent from "./pages/register/register.component";
import LoginComponent from "./pages/login/login.component";
import AddMarkaComponent from "./pages/addmarka/addmarka.component";
import MarkeComponent from "./pages/marke/marke.component";
import { AddModelComponent } from './pages/add-model/add-model.component';
import { ShowModelsComponent } from './show-models/show-models.component';
import { ManageCarsComponent } from './pages/manage-cars/manage-cars.component';
import { EditCarComponent } from './pages/manage-cars/edit-car/edit-car.component';


export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addmarka', component: AddMarkaComponent },
  { path: 'marke', component: MarkeComponent },
  { path: 'addModel', component: AddModelComponent },
  { path: 'getModels', component: ShowModelsComponent},
  { path: 'manageCars', component: ManageCarsComponent },
  { path: 'editCar/:id', component: EditCarComponent }
];
