import { Component, OnInit } from '@angular/core';
import { AddModelService } from '../../services/add-model.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.css']
})
export class AddModelComponent implements OnInit {

  model = new FormGroup({
    modelName: new FormControl()
  });

  constructor(private modelService: AddModelService, private ruter: Router) { }

  ngOnInit() {
  }

  addMarka(formData) {
    this.modelService.addModel(formData).subscribe(data => {
      this.ruter.navigate(["/"]);
    });
  }

}
