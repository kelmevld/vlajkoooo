import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private http: Http) {

  }

  getCar(id) {
    return this.http.get("http://127.0.0.1/phpispit/getCar.php?id=" + id);
  }

  getCars() {
    return this.http.get("http://127.0.0.1/phpispit/getCars.php");
  }

  deleteCar(id) {
    return this.http.get("http://127.0.0.1/phpispit/deleteCar.php?id="+id);
  }

  createCar(formData) {
    return this.http.post("http://127.0.0.1/phpispit/createCar.php", {
      "modelId":formData['model'],
      "ime":formData['ime'],
      "godiste":formData['godiste'],
      "opis":formData['opis'],
      "kilometraza":formData['kilometraza'],
      "cena":formData['cena'],
    });
  }

  getModels() {
    return this.http.get("http://127.0.0.1/phpispit/getModels.php");
  }

}
