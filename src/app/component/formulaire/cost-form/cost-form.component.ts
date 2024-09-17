import { Component } from '@angular/core';
import {FormComponent} from "../../../utils/public/form.component";
import {Cost} from "../../../utils/interfaces/models/cost";
import {CostService} from "../../../utils/services/cost-service";
import {ReactiveFormsModule, Validators} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {getProfileStorage} from "../../../utils/Utils";
import {TypeCostService} from "../../../utils/services/type-cost-service";
import {Type_cost} from "../../../utils/interfaces/models/type_cost";
import {DropdownModule} from "primeng/dropdown";
import {CalendarModule} from "primeng/calendar";

@Component({
  selector: 'app-cost-form',
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    DropdownModule,
    CalendarModule
  ],
  templateUrl: './cost-form.component.html',
  styleUrl: './cost-form.component.css'
})
export class CostFormComponent extends FormComponent<Cost, CostService>{
  list!:Type_cost[]
  constructor(service: CostService, tcost_service: TypeCostService) {
    super(service);
    this.state = 'working'
    tcost_service.get().subscribe({
      next : (result) => {
        this.list = result;
        this.state = "idle";
      },
      error : (error) =>{
        this.state = "error";
        this.messageService.add({
          severity:"error",
          summary:"Une erreur est survenue",
          detail:"Impossible d'obtenir la liste des types de dépense"
        })
      }
    })
    const profile = getProfileStorage()
    this.form = this.formBuilder.group({
      description:[this.model ? this.model.description : null, [Validators.required]],
      tcost_id:[this.model ? this.model.tcost_id : null, [Validators.required]],
      value:[this.model ? this.model.value : null, [Validators.required]],
      person_id:[this.model ? this.model.person_id : profile?.id],
      date_release:[this.model && this.model.date_release  ? new Date(this.model.date_release) : null]

    })
  }
}
