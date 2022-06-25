import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.scss']
})
export class SectionContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clickToCall(): void {
    window.open('tel:+9647703614849');
  }

  openLink(link: string): void {
    window.location.href = link;
  }
}
