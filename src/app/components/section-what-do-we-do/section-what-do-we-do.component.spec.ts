import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWhatDoWeDoComponent } from './section-what-do-we-do.component';

describe('SectionWhatDoWeDoComponent', () => {
  let component: SectionWhatDoWeDoComponent;
  let fixture: ComponentFixture<SectionWhatDoWeDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionWhatDoWeDoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionWhatDoWeDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
