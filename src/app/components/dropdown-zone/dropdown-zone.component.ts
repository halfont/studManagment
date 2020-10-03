import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { schoolStore } from '../../reducers/school.reducer';

@Component({
  selector: 'dropdown-zone',
  templateUrl: './dropdown-zone.component.html',
  styleUrls: ['./dropdown-zone.component.css']
})
export class DropdownZoneComponent implements OnInit {
  classTypes: Set<any>;
  classyears: Set<any>;
  selectedYear;
  selectedClass;
  studentList: Set<any>;

  constructor(private store: Store<schoolStore>, private cdr: ChangeDetectorRef) {

  }
  ngOnInit(): void {
    // data objects for select dropdowns
    this.classyears = new Set;
    this.classTypes = new Set;
    // data object for later display of dataGrid and cards
    this.studentList = new Set;
    // ui logic function for population of dropdowns and dataGrid
    this.setDropdownOptions();
  }

  studentListArr() {
    return [...this.studentList];
  }

  yearSelected(year) {
    this.selectedYear = year.target.value
    this.setDropdownOptions()
  }
  classSelected(cls) {
    this.selectedClass = cls.target.value
    this.setDropdownOptions()
  }

  setDropdownOptions() {
    //state machine for the dropdown logic -> 4 states of UI
    this.store.subscribe((v) => {
      let schoolStore = v.schoolStore.school;
      this.studentList.clear();
      // state 1: prestine dropdowns, display all data
      if (!this.selectedYear && !this.selectedClass) {
        schoolStore.classTypes.forEach(item => this.classTypes.add(item))
        schoolStore.classStudents.map(cls => {
          cls.students.map((stud) => {
            this.classyears.add(stud.year)
            this.studentList.add(Object.assign({}, stud, { "class": cls.classType }))
          })
        });
        // state 2: year selection but no class selection
      } else if (!this.selectedClass || !this.selectedClass.length) {
        this.classTypes.clear();
        schoolStore.classStudents.map(cls => {
          cls.students.map((stud) => {
            if (stud.year == this.selectedYear) {
              this.classTypes.add(cls.classType);
              this.studentList.add(Object.assign({}, stud, { "class": cls.classType }))
            }
          })
        })
        // state 3: class selection but no year selection
      } else if (!this.selectedYear || !this.selectedYear.length) {
        this.classyears.clear();
        schoolStore.classStudents.map(cls => {
          (cls.classType == this.selectedClass) && cls.students.map((stud) => {
            this.classyears.add(stud.year)
            this.studentList.add(Object.assign({}, stud, { "class": cls.classType }))
          })
        });
        // state 4: both selected
      } else {
        schoolStore.classStudents.map(cls => {
          cls.students.map((stud) => {
            if (stud.year == this.selectedYear && cls.classType == this.selectedClass) {
              this.studentList.add(Object.assign({}, stud, { "class": cls.classType }))
            }
            // remove redundent dropdown data
            this.classyears.forEach((key) =>
              this.selectedYear == key || this.classyears.delete(key)
            );
            this.classTypes.forEach((key) =>
              this.selectedClass == key || this.classTypes.delete(key)
            );
          })
        })
      }

    })

  }


}
