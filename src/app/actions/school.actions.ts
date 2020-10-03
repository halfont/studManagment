import { createAction, props } from '@ngrx/store';

export const replaceSelectedStudent = createAction(
  '[School] replace selected Student',
  props<{ selectedStudent: any }>()
);





