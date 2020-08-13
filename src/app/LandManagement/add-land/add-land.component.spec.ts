import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLAndComponent } from './add-land.component';

describe('AddLAndComponent', () => {
  let component: AddLAndComponent;
  let fixture: ComponentFixture<AddLAndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLAndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLAndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
