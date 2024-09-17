import { ConfirmationService, MessageService } from "primeng/api";
import { CrudService } from "./crud.service";
import { Type, inject } from "@angular/core";
import { DialogService } from "primeng/dynamicdialog";
import { FormComponent } from "./form.component";
import {HasId} from "../interfaces/hasId";
import {DatePipe} from "@angular/common";

export class CrudComponent<
    T extends HasId,
    S extends CrudService<T>,
    F extends FormComponent<T,S>
>{
    protected confirmationService : ConfirmationService = inject(ConfirmationService);
    protected messageService : MessageService = inject(MessageService);
    protected dialogService : DialogService = inject(DialogService);
    protected datePipe: DatePipe = inject(DatePipe);
    models : T[] = [];
    state : string = "idle";

    constructor(protected service : S,private modelName:string,protected formType : Type<F>){
        this.state = "loading";
        this.getAll();
    }

    getAll(){
        this.service.get().subscribe({
            next : (data) => {
                this.models = data;
                this.state = "idle";
            },
            error : (e) => {
                this.state = e
            }
        })
    }

    deleteElement(model : T,label : string) {
        this.confirmationService.confirm({
            header:'Confirmation de la suppression',
            message:`Voulez vous vraiment supprimer '${label}' ?`,
            acceptLabel:"Confirmer",
            rejectLabel:"Annuler",
            acceptButtonStyleClass:'p-button-danger',
            accept: () => {
              let id:number = model.id ? model.id : -1;
                this.service.delete(id).subscribe({
                    error : (e) => {
                        this.messageService.add({
                            severity:'error',
                            summary:'Erreur',
                            detail:e
                        });
                    },
                    next : () =>{
                        this.messageService.add({
                            severity : 'success',
                            summary:'Succés',
                            detail:'Opération réussie'
                        });
                        this.models = this.models.filter((tmp) => tmp !== model);
                    }
                });
            }
        })
    }

    showAddElement() {
        let reference = this.dialogService.open(this.formType,{
            header : "Création de l'entité " + this.modelName,
            width:"80%",
            appendTo:"body"
        });
        reference.onClose.subscribe((created) => {
            if(created){
                this.models.push(created);
            }
        })
    }
    showUpdateElement(model : T) {
        let reference = this.dialogService.open(this.formType,{
            header:`Modification de l'entité ${this.modelName}`,
            width:"80%",
            data:{
                update:true,
                model:model
            },
            appendTo:"body"
        });
        reference.onClose.subscribe((updated) => {
            if(updated){
                Object.assign(model,updated);
            }
        })
    }
}
