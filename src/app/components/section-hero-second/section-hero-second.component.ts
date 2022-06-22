import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-section-hero-second',
  templateUrl: './section-hero-second.component.html',
  styleUrls: ['./section-hero-second.component.scss']
})
export class SectionHeroSecondComponent implements OnInit {
  @Output() about: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
