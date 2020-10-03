import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { replaceSelectedStudent } from 'src/app/actions/school.actions';

@Component({
  selector: 'data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {
  @Input() dataList: any;
  clickedRow:Number;
  viewType: string;
  constructor(private store: Store<{ schoolStore }>) { 
  }

  ngOnInit(): void {
  }

  clickRow(index) {
    this.store.dispatch(replaceSelectedStudent({ selectedStudent: this.dataList[index] }))
    this.clickedRow = index;
  }

  rowClass(score, index) {
    let colorClass = ''
    colorClass = (score <= 45) && 'red';
    if (this.clickedRow === index) { colorClass = 'active' }
    return colorClass;
  }

  viewToggle(str) {
    this.viewType = str
  }
}
