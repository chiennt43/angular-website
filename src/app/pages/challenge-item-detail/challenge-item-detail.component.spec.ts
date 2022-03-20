import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeItemDetailComponent } from './challenge-item-detail.component';

describe('ChallengeItemDetailComponent', () => {
  let component: ChallengeItemDetailComponent;
  let fixture: ComponentFixture<ChallengeItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeItemDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
