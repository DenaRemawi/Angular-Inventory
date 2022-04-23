import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueAddComponent } from './value-add.component';

describe('ValueAddComponent', () => {
  let component: ValueAddComponent;
  let fixture: ComponentFixture<ValueAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
