import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentpriceComponent } from './currentprice.component';

describe('CurrentpriceComponent', () => {
  let component: CurrentpriceComponent;
  let fixture: ComponentFixture<CurrentpriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentpriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
