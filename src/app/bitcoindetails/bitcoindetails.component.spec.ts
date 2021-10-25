import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoindetailsComponent } from './bitcoindetails.component';

describe('BitcoindetailsComponent', () => {
  let component: BitcoindetailsComponent;
  let fixture: ComponentFixture<BitcoindetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitcoindetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoindetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
