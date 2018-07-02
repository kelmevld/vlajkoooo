import { Component} from '@angular/core';
import 'rxjs/Rx';
import Marka from "../../model/marka";
import MarkeService from "../../services/marke.service";

@Component({
  selector: 'marke',
  templateUrl: `./marke.html`,
})

export default class MarkeComponent {

  marke: Marka[];

  constructor( private markeService : MarkeService ) {
    var $:any;
    this.markeService.getMarke().subscribe(data => {
      this.marke = data;
      setInterval(function(){
        $ = window['jQuery'];
        $('table').DataTable();
      }.bind(this),400);
    });
  }


}
