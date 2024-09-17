import {Injectable} from "@angular/core";
import {CrudService} from "../public/crud.service";
import {Person} from "../interfaces/models/person";
import {HttpClient} from "@angular/common/http";
import {host} from "./host";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonService extends CrudService<Person>{
  constructor(httpClient:HttpClient) {
    super(httpClient, '/person');
  }
  login(person:Person):Observable<any>{
      return this.http.post(host+this.url+'/login', person)
  }
}
