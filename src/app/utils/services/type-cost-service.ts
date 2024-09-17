import {Injectable} from "@angular/core";
import {CrudService} from "../public/crud.service";
import {Type_cost} from "../interfaces/models/type_cost";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TypeCostService extends CrudService<Type_cost>{
  constructor(httpClient:HttpClient) {
    super(httpClient, '/type_cost');
  }
}
