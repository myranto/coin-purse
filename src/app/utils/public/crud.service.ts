import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {host} from "../services/host";

export class CrudService<T>{
    constructor(protected http : HttpClient,protected url : string){

    }

    get() : Observable<T[]> {
        return this.http.get<T[]>(host+this.url);
    }

    create(model : T) : Observable<T> {
        console.log(model);

        return this.http.post<T>(host+this.url,model);
    }

    update(model : T) : Observable<T>{
        return this.http.put<T>(host+this.url,model);
    }

    delete(id : number) {
        return this.http.delete(host+this.url+`/${id}`);
    }
}
