import { Component } from '@angular/core';
import {CrudComponent} from "../../utils/public/crud.component";
import {Cost} from "../../utils/interfaces/models/cost";
import {CostService} from "../../utils/services/cost-service";
import {CostFormComponent} from "../../component/formulaire/cost-form/cost-form.component";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {ListComponent} from "../../component/common/list/list.component";

@Component({
  selector: 'app-cost',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    ListComponent
  ],
  templateUrl: './cost.component.html',
  styleUrl: './cost.component.css'
})
export class CostComponent extends CrudComponent<Cost, CostService, CostFormComponent>{
  constructor(service: CostService) {
    super(service, 'Cost', CostFormComponent);
  }
  column:any = [
    {
      name:'Type dépense',
      selector:(row:any)=>row?.cost?.wording,
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
      name:'Date sortie',
      selector:(row:any)=> this.datePipe.transform(row?.date_release, 'd MMMM yyyy', 'fr'),
      sortable:true,
    },
  ]
}
