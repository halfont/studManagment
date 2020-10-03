import { Component } from '@angular/core';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  studData: any;
  editorStyle = {
    'background-color': 'white',
    'height':'30vh'
  }

  constructor(private store: Store<{ schoolStore }>) {
    this.store.subscribe(v => {
      let stud = v.schoolStore.selectedStudent
      this.studData = Object.assign({},stud )
    })
  }


  selectedStud() {
    return this.studData
  }
}
