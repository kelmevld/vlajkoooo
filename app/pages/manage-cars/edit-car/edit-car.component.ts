import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ModelService } from '../../../services/model.service';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  carsForm = new FormGroup({
    model: new FormControl(),
    ime: new FormControl(),
    godiste: new FormControl(),
    kilometraza: new FormControl(),
    cena: new FormControl(),
    opis: new FormControl()
  });

  constructor(private active: ActivatedRoute, private model: ModelService) { }

  idOfCar;

  getCar(id) {
    this.model.getCar(id).subscribe(data => {
      let pom = data.json();
      pom = pom[0];
      console.log(pom);
      this.carsForm.setValue(
        {
          model: pom["MODEL_ID"], 
          ime: pom['IME'],
          godiste: pom['GODISTE'],
          kilometraza: pom['KILOMETRAZA'],
          cena: pom['CENA'],
          opis: pom['OPIS'],
        });
    });
  }
  
  ngOnInit() {
    this.active.params.subscribe(data => {
      this.idOfCar = data['id'];
      this.getCar(this.idOfCar);
    });
  }

  

}
