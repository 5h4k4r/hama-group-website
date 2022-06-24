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

  openMessenger(): void {
    // https://m.me/119173678135946
    window.location.href = 'https://m.me/119173678135946';
  }

  openEmail(): void {
    window.location.href = "mailto:info@hamafx.com";

  }
}
