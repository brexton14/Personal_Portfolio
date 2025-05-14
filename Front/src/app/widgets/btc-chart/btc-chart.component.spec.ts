import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtcChartComponent } from './btc-chart.component';

describe('BtcChartComponent', () => {
  let component: BtcChartComponent;
  let fixture: ComponentFixture<BtcChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtcChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtcChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
