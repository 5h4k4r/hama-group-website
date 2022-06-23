import { Component, OnInit } from '@angular/core';
import { companiesCards } from 'src/app/constants/companieCards';

@Component({
  selector: 'app-horizontal-scroll-cards',
  templateUrl: './horizontal-scroll-cards.component.html',
  styleUrls: ['./horizontal-scroll-cards.component.scss']
})
export class HorizontalScrollCardsComponent implements OnInit {
  cards = companiesCards;
  constructor() { }

  ngOnInit(): void {
  }

}
