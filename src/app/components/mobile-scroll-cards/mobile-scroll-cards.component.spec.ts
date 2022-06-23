import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileScrollCardsComponent } from './mobile-scroll-cards.component';

describe('MobileScrollCardsComponent', () => {
  let component: MobileScrollCardsComponent;
  let fixture: ComponentFixture<MobileScrollCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileScrollCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileScrollCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
