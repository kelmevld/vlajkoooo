
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Injectable } from "@angular/core";
import PostService from "./post.service";
import { apiUrl, getAuthHeaders} from "../constants";
import { Observable } from "rxjs";

@Injectable()
export class AddMarkaService extends PostService{
  url = apiUrl + 'addmarkaservice.php';

  callService(item: Object) : Observable<void> {
    this.headers = getAuthHeaders();
    return super.callService(item);
  }
}
