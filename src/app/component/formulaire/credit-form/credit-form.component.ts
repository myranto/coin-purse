import { Component } from '@angular/core';
import {FormComponent} from "../../../utils/public/form.component";
import {Credit} from "../../../utils/interfaces/models/credit";
import {CreditService} from "../../../utils/services/credit-service";
import {Type_credit} from "../../../utils/interfaces/models/type_credit";
import {TypeCreditService} from "../../../utils/services/type-credit-service";
import {ReactiveFormsModule, Validators} from "@angular/forms";
import {getProfileStorage} from "../../../utils/Utils";
import {ButtonModule} from "primeng/button";
import {CalendarModule} from "primeng/calendar";
import {DropdownModule} from "primeng/dropdown";
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'app-credit-form',
  standalone: true,
  imports: [
    ButtonModule,
    CalendarModule,
    DropdownModule,
    InputTextModule,
    ReactiveFormsModule
  ],
  templateUrl: './credit-form.component.html',
  styleUrl: './credit-form.component.css'
})
export class CreditFormComponent extends FormComponent<Credit, CreditService>{
  list!:Type_credit[]
  constructor(service:CreditService, tcredit_service:TypeCreditService) {
    super(service);
    this.state = 'working'
    tcredit_service.get().subscribe({
      next : (result) => {
        this.list = result;
        this.state = "idle";
      },
      error : (error) =>{
        this.state = "error";
        this.messageService.add({
          severity:"error",
          summary:"Une erreur est survenue",
          detail:"Impossible d'obtenir la liste des type de crédit"
        })
      }
    })
    const profile = getProfileStorage()
    this.form = this.formBuilder.group({
      description:[this.model ? this.model.description : null, [Validators.required]],
      tcredit_id:[this.model ? this.model.tcredit_id : null, [Validators.required]],
      value:[this.model ? this.model.value : null, [Validators.required]],
      person_id:[this.model ? this.model.person_id : profile?.id],
      date_entry:[this.model && this.model.date_entry  ? new Date(this.model.date_entry) : null]
    })
  }
}
