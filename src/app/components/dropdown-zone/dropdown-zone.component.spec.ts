import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownZoneComponent } from './dropdown-zone.component';

describe('DropdownZoneComponent', () => {
  let component: DropdownZoneComponent;
  let fixture: ComponentFixture<DropdownZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
