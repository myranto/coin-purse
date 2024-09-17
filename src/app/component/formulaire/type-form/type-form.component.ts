import { Component } from '@angular/core';
import {FormComponent} from "../../../utils/public/form.component";
import {Type_cost} from "../../../utils/interfaces/models/type_cost";
import {TypeCostService} from "../../../utils/services/type-cost-service";
import {ReactiveFormsModule, Validators} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-type-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule
  ],
  templateUrl: './type-form.component.html',
  styleUrl: './type-form.component.css'
})
export class TypeFormComponent extends FormComponent<Type_cost, TypeCostService>{
  constructor(service: TypeCostService) {
    super(service);
    this.form = this.formBuilder.group({
      wording:[this.model ? this.model.wording : null, [Validators.required]]
    })
  }
}
