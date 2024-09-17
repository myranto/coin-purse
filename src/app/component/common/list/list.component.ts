import {Component, Input} from '@angular/core';
import {TableModule} from "primeng/table";
import {NgForOf, NgIf} from "@angular/common";
import {SkeletonModule} from "primeng/skeleton";
import {ActionButtonComponent} from "../button/action.button.component";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    TableModule,
    NgIf,
    NgForOf,
    SkeletonModule,
    ActionButtonComponent
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() header: string = '';
  @Input() data: any = [];
  @Input() state:string = 'loading';
  @Input() column: any = [];
  @Input() trash:any='';
  @Input() edit:any='';
  @Input() funcTrash:Function|undefined;
  @Input() funcEdit:Function|undefined;
  skeletons = new Array(5);
  log(){

  }
  callFuncEdit(rowData: any) {
    console.log(rowData)
    if (this.funcEdit) {
      this.funcEdit(rowData);
    }
  }

}
