import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ModelService } from '../../services/model.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-cars',
  templateUrl: './manage-cars.component.html',
  styleUrls: ['./manage-cars.component.css']
})
export class ManageCarsComponent implements OnInit {
  
  cars:any = [];
  models:any = [];

  carsForm = new FormGroup({
    model: new FormControl(),
    ime: new FormControl(),
    godiste: new FormControl(),
    kilometraza: new FormControl(),
    cena: new FormControl(),
    opis: new FormControl()
  });

  constructor(private model:ModelService, private ruter: Router) { }

  ngOnInit() {
    this.getModels();
    this.getCars();
  }

  getModels() {
    this.model.getModels().subscribe(data => {
      this.models = data.json();
    });
  }

  getCars() {
    this.model.getCars().subscribe(data => {
      this.cars = data.json();
      console.log(data.text());
    });
  }

  deleteCar(id) {
    this.model.deleteCar(id).subscribe(data => {
      console.log(data.json());
    });
  }

  editCar(id) {
    this.ruter.navigate(['/editCar', id]);
  }

  createCar(form) {
    this.model.createCar(form).subscribe(data => {
      console.log(data.json());
    });
  }

}
