import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHeroSecondComponent } from './section-hero-second.component';

describe('SectionHeroSecondComponent', () => {
  let component: SectionHeroSecondComponent;
  let fixture: ComponentFixture<SectionHeroSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionHeroSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionHeroSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
