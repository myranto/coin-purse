import { Component } from '@angular/core';
import {CardModule} from "primeng/card";
import {CrudComponent} from "../../utils/public/crud.component";
import {Type_cost} from "../../utils/interfaces/models/type_cost";
import {TypeCostService} from "../../utils/services/type-cost-service";
import {TypeFormComponent} from "../../component/formulaire/type-form/type-form.component";
import {ButtonModule} from "primeng/button";
import {ListComponent} from "../../component/common/list/list.component";

@Component({
  selector: 'app-type-cost',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    ListComponent
  ],
  templateUrl: './type-cost.component.html',
  styleUrl: './type-cost.component.css'
})
export class TypeCostComponent extends CrudComponent<Type_cost, TypeCostService, TypeFormComponent>{
  constructor(service: TypeCostService) {
    super(service, "Type dépense", TypeFormComponent);
  }
  column:any= [
    {
      name:'Nom',
      selector:(row:any)=>row?.wording,
      sortable:true,
    },
  ]
}
