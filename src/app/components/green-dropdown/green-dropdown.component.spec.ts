import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenDropdownComponent } from './green-dropdown.component';

describe('GreenDropdownComponent', () => {
  let component: GreenDropdownComponent;
  let fixture: ComponentFixture<GreenDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
