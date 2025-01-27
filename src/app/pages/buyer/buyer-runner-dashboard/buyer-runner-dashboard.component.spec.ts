import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerRunnerDashboardComponent } from './buyer-runner-dashboard.component';

describe('BuyerRunnerDashboardComponent', () => {
  let component: BuyerRunnerDashboardComponent;
  let fixture: ComponentFixture<BuyerRunnerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyerRunnerDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerRunnerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
