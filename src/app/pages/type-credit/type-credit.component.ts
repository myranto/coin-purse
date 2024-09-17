import { Component } from '@angular/core';
import {CrudComponent} from "../../utils/public/crud.component";
import {Type_credit} from "../../utils/interfaces/models/type_credit";
import {TypeCreditService} from "../../utils/services/type-credit-service";
import {TypeCreditFormComponent} from "../../component/formulaire/type-credit-form/type-credit-form.component";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {ListComponent} from "../../component/common/list/list.component";

@Component({
  selector: 'app-type-credit',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    ListComponent
  ],
  templateUrl: './type-credit.component.html',
  styleUrl: './type-credit.component.css'
})
export class TypeCreditComponent extends CrudComponent<Type_credit, TypeCreditService, TypeCreditFormComponent>{
  constructor(service: TypeCreditService) {
    super(service, "Type Crédit",TypeCreditFormComponent);
  }
  column:any= [
    {
      name:'Nom',
      selector:(row:any)=>row?.wording,
      sortable:true,
    },
  ]
}
