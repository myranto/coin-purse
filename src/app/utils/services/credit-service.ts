import {CrudService} from "../public/crud.service";
import {Credit} from "../interfaces/models/credit";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class CreditService extends CrudService<Credit>{
  constructor(http: HttpClient) {
    super(http, '/credit');
  }
}
