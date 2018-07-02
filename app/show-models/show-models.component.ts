import { Component, OnInit } from '@angular/core';
import { AddModelService } from '../services/add-model.service';

@Component({
  selector: 'app-show-models',
  templateUrl: './show-models.component.html',
  styleUrls: ['./show-models.component.css']
})
export class ShowModelsComponent implements OnInit {

  models:any = [];

  constructor(private model: AddModelService) { }

  ngOnInit() {
    this.getModels();
  }

  getModels() {
    this.model.getModels().subscribe(data => {
      this.models = data.json();
    });
  }

  deleteModel(id) {
    this.model.deleteModel(id).subscribe(data => {
      console.log(data.text());
      this.getModels();
    });
  }

}
