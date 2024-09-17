import {CrudService} from "../public/crud.service";
import {Cost} from "../interfaces/models/cost";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CostService extends CrudService<Cost>{
  constructor(http: HttpClient) {
    super(http, '/cost');
  }
}
