import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthChartComponent } from './eth-chart.component';

describe('EthChartComponent', () => {
  let component: EthChartComponent;
  let fixture: ComponentFixture<EthChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EthChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EthChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
