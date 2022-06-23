import { Component, OnInit } from '@angular/core';
import { companiesCards } from 'src/app/constants/companieCards';

@Component({
  selector: 'app-mobile-scroll-cards',
  templateUrl: './mobile-scroll-cards.component.html',
  styleUrls: ['./mobile-scroll-cards.component.scss']
})
export class MobileScrollCardsComponent implements OnInit {
  cards = companiesCards;

  constructor() { }

  ngOnInit(): void {
  }

}
