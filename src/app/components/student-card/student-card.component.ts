import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {
  @Input() data: any
  @Input() selectClass: any
  constructor() { }

  ngOnInit(): void {
  }

}
