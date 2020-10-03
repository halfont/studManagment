import {
  createReducer,
  on
} from '@ngrx/store';
import  {School}  from '../models/school.model';
import { replaceSelectedStudent } from '../actions/school.actions';

export const schoolFeatureKey = 'school';

export interface schoolStore {
  [idx: string]: any;
  school: School,
  selectedStudent: {};
}

let school = [];

if (localStorage.schoolStore){
  let schoolStoreStorage = JSON.parse(localStorage.schoolStore)
  school = schoolStoreStorage.schoolStore
}

export const initialState: schoolStore = {
  school: {
    classStudents: [
      {
        students: [
          {
            fname: "Jones",
            lname: "Smith",
            grade: 84.2,
            year: 1940
          },
          {
            fname: "Barbara",
            lname: "Farly",
            grade: 55,
            year: 1940
          },
          {
            fname: "Shirly",
            lname: "Tema",
            grade: 30,
            year: 2012
          },
          {
            fname: "Santa",
            lname: "Rummi",
            grade: 75,
            year: 2012
          }
        ],
        classType: "Biology"
      },
      {
        students: [
          {
            fname: "Jo2nes",
            lname: "Smith",
            grade: 84.2,
            year: 1940
          },
          {
            fname: "Sara",
            lname: "Karlson",
            grade: 99.2,
            year: 1960
          },
          {
            fname: "Avi",
            lname: "Kaster",
            grade: 70,
            year: 1960
          },
          {
            fname: "Sami",
            lname: "Perez",
            grade: 90,
            year: 2009
          }
        ],
        classType: "Chemistry"
      },
      {
        students: [
          {
            fname: "Tevon",
            lname: "Barens",
            grade: 43,
            year: 1980
          },
          {
            fname: "Josef",
            lname: "Cohen",
            grade: 60,
            year: 1980
          },
          {
            fname: "Nati",
            lname: "Green",
            grade: 99,
            year: 2001
          },
          {
            fname: "Shakil",
            lname: "Jareh",
            grade: 88,
            year: 2001
          }
        ],
        classType: "ComputerScience"
      }
    ],
    classTypes: [
      "Biology",
      "Chemistry",
      "ComputerScience"
    ]
  },
  selectedStudent: {},
}

export const schoolReducer = createReducer<any>(initialState,
  on(replaceSelectedStudent, (state, action) => {
    let newstate = { ...state }
    newstate.selectedStudent = action.selectedStudent;
    localStorage.setItem('schoolStore',JSON.stringify(newstate))
    return newstate;
  })
)