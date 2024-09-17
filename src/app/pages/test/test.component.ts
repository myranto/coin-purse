import { Component } from '@angular/core';
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    CardModule
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

}
