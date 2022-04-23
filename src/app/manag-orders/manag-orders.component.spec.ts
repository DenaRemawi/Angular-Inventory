import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagOrdersComponent } from './manag-orders.component';

describe('ManagOrdersComponent', () => {
  let component: ManagOrdersComponent;
  let fixture: ComponentFixture<ManagOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
