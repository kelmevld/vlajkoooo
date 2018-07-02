import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AddModelService {

  constructor(private http: Http) { }

  addModel(data) {
    return this.http.post("http://127.0.0.1/phpispit/addModel.php", {
      "modelName" : data['modelName']
    });
  }

  getModels() {
    return this.http.get("http://127.0.0.1/phpispit/getModels.php");
  }

  deleteModel(id) {
    return this.http.get("http://127.0.0.1/phpispit/deleteModel.php?id=" + id);
  }

}
