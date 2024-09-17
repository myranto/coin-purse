import { Component } from '@angular/core';
import {CrudComponent} from "../../utils/public/crud.component";
import {Credit} from "../../utils/interfaces/models/credit";
import {CreditService} from "../../utils/services/credit-service";
import {CreditFormComponent} from "../../component/formulaire/credit-form/credit-form.component";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {ListComponent} from "../../component/common/list/list.component";

@Component({
  selector: 'app-credit',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    ListComponent
  ],
  templateUrl: './credit.component.html',
  styleUrl: './credit.component.css'
})
export class CreditComponent extends CrudComponent<Credit, CreditService, CreditFormComponent>{
  constructor(service: CreditService) {
    super(service, 'Crédit', CreditFormComponent);
  }
  column:any = [
    {
      name:'Type crédit',
      selector:(row:any)=>row?.credit?.wording,
      sortable:true,
    },
    {
      name:'Description',
      selector:(row:any)=>row?.description,
      sortable:true,
    },

    {
      name:'Valeur',
      selector:(row:any)=>row?.value,
      sortable:true,
    },
    {
      name:'Date entrée',
      selector:(row:any)=> this.datePipe.transform(row?.date_entry, 'd MMMM yyyy', 'fr'),
      sortable:true,
    },
  ]
}
