import { Component } from '@angular/core';
import {ButtonModule} from "primeng/button";
import {FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {FormComponent} from "../../../utils/public/form.component";
import {Type_credit} from "../../../utils/interfaces/models/type_credit";
import {TypeCreditService} from "../../../utils/services/type-credit-service";

@Component({
  selector: 'app-type-credit-form',
  standalone: true,
    imports: [
        ButtonModule,
        FormsModule,
        InputTextModule,
        ReactiveFormsModule
    ],
  templateUrl: './type-credit-form.component.html',
  styleUrl: './type-credit-form.component.css'
})
export class TypeCreditFormComponent extends FormComponent<Type_credit, TypeCreditService>{
    constructor(service: TypeCreditService) {
      super(service);
      this.form = this.formBuilder.group({
        wording:[this.model ? this.model.wording : null, [Validators.required]]
      })
    }
}
