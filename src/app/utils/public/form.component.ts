import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CrudService } from './crud.service';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import {HasId} from "../interfaces/hasId";

export class FormComponent<T extends HasId, S extends CrudService<T>> {
  model!: T;
  update: boolean = false;
  state: string = 'idle';

  protected formBuilder: FormBuilder = inject(FormBuilder);
  protected reference: DynamicDialogRef = inject(DynamicDialogRef);
  protected config: DynamicDialogConfig = inject(DynamicDialogConfig);
  protected messageService: MessageService = inject(MessageService);
  form!: FormGroup;

  constructor(private service: S) {
    this.model = this.config.data?.model;
    this.update = this.config.data?.update;
  }

  onSubmit() {
    if (this.form.valid) {
      this.state = 'loading';
      let temp: T = {} as T;
      Object.assign(temp, this.form.value);
      if (this.update) {
        temp.id = this.model.id;
        this.service.update(temp).subscribe({
          error: (e) => {
            this.state = 'idle';
            alert('error')
            console.log(e)
            this.messageService.add({
              severity: 'error',
              summary: 'Une erreur est survenue',
              detail: e.error.message,
            });
          },
          next: (updated) => {
            this.state = 'idle';
            this.messageService.add({
              severity: 'success',
              summary: 'Succés',
              detail: 'Modification réussie',
            });
            this.reference.close(updated);
          },
        });
      } else {
        this.service.create(temp).subscribe({
          error: (e) => {
            this.state = 'idle';
            this.messageService.add({
              severity: 'error',
              summary: 'Une erreur est survenue',
              detail: e.error.message,
            });
          },
          next: (created) => {
            this.state = 'idle';
            this.messageService.add({
              severity: 'success',
              summary: 'Succés',
              detail: 'Création réussie',
            });
            this.reference.close(created);
          },
        });
      }
    }else{
        Object.keys(this.form.controls).forEach((key) => {
            if(!this.form.controls[key].valid){
              console.log(key)
              console.log(this.form.controls[key].value)
                this.form.controls[key].markAsDirty();
            }
        })
    }
  }

  onCancel() {
    this.reference.close();
  }
}
