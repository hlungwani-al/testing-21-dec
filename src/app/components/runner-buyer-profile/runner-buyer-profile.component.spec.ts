import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunnerBuyerProfileComponent } from './runner-buyer-profile.component';

describe('RunnerBuyerProfileComponent', () => {
  let component: RunnerBuyerProfileComponent;
  let fixture: ComponentFixture<RunnerBuyerProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RunnerBuyerProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunnerBuyerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
