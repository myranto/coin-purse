import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-action-button',
  standalone: true,
  imports: [
    ButtonModule
  ],
  templateUrl: './action.button.component.html',
  styleUrl: './action.button.component.scss'
})
export class ActionButtonComponent {
  @Input() icon! : string;
  @Input() severity : string = "primary";
  @Input() onClick! : any;
}
