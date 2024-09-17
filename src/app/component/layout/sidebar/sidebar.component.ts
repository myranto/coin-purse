import {Component, Input} from "@angular/core";
import {MenuItem} from "primeng/api";
import {menu} from "../../../utils/menu";
import {SidebarModule} from "primeng/sidebar";
import {MenuModule} from "primeng/menu";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SidebarModule,
    MenuModule,
    ButtonModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() sidebarVisible!:boolean;
  items : MenuItem[] = menu;
  @Input() onClickP!:Function;

}
