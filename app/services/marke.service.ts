import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {apiUrl, getAuthHeaders} from "../constants";
import Marka from "../model/marka";

@Injectable()
export default class MarkeService {
  protected url = apiUrl + "getmarke.php";

  constructor (protected http: Http) {}

  getMarke(): Observable<Marka[]> {
    return this.http.get(this.url, {headers: getAuthHeaders() })
      .map(this.extractData)
  }
  protected extractData(res: Response) {
    let obj = JSON.parse(res['_body']);
    return obj.kategorije;
  }


}
