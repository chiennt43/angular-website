import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeItemsComponent } from './challenge-items.component';

describe('ChallengeItemsComponent', () => {
  let component: ChallengeItemsComponent;
  let fixture: ComponentFixture<ChallengeItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
