import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkDetailComponent } from './talk-detail.component';

describe('TalkDetailComponent', () => {
  let component: TalkDetailComponent;
  let fixture: ComponentFixture<TalkDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TalkDetailComponent]
    });
    fixture = TestBed.createComponent(TalkDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
