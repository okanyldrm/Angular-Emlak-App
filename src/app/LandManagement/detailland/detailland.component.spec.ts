import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillandComponent } from './detailland.component';

describe('DetaillandComponent', () => {
  let component: DetaillandComponent;
  let fixture: ComponentFixture<DetaillandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaillandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaillandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
