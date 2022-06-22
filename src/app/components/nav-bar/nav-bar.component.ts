import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const nav = document.getElementById('nav-container')!;

    window.onscroll = () => {
      console.log(nav.scrollTop)
    }
  }

}
