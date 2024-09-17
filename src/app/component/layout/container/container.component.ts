import { Component } from '@angular/core';
import {TopBarComponent} from "../top-bar/top-bar.component";
import {SidebarComponent} from "../sidebar/sidebar.component";
import {CardModule} from "primeng/card";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    TopBarComponent,
    SidebarComponent,
    CardModule,
    RouterOutlet
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  sidebarVisible = true;

  onClick(){
    this.sidebarVisible = !this.sidebarVisible
  }
}
