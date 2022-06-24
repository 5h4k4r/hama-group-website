import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCopyrightComponent } from './section-copyright.component';

describe('SectionCopyrightComponent', () => {
  let component: SectionCopyrightComponent;
  let fixture: ComponentFixture<SectionCopyrightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCopyrightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionCopyrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
