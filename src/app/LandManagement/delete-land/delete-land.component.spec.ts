import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLandComponent } from './delete-land.component';

describe('DeleteLandComponent', () => {
  let component: DeleteLandComponent;
  let fixture: ComponentFixture<DeleteLandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteLandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
