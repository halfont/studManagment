import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-green-dropdown',
  templateUrl: './green-dropdown.component.html',
  styleUrls: ['./green-dropdown.component.css']
})
export class GreenDropdownComponent {
  @Input() options: [];
  @Input() txt: string;

}
