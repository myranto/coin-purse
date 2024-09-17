import {Injectable} from "@angular/core";
import {CrudService} from "../public/crud.service";
import {Type_credit} from "../interfaces/models/type_credit";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TypeCreditService extends CrudService<Type_credit>{
  constructor(httpClient:HttpClient) {
    super(httpClient, '/type_credit');
  }
}
