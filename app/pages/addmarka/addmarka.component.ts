
import { Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Router} from '@angular/router';
import { AddMarkaService } from "../../services/addmarka.service";
import Marka from "../../model/marka";

@Component({
  selector: 'addmarka',
  templateUrl: `./addmarka.html`
})

export default class AddMarkaComponent {

  addMarkaForm = new FormGroup({
    ime: new FormControl(),
  });

  constructor( private http: Http,private router: Router,private addMarkaService: AddMarkaService) {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/']);
    }
  }

  addMarka(model: Marka) {
    this.addMarkaService.callService(model).subscribe(data => {
      this.router.navigate(['/marke']);
    });

  }

}
