import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-about',
  templateUrl: './section-about.component.html',
  styleUrls: ['./section-about.component.scss']
})
export class SectionAboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const nodes = document.getElementsByClassName('node');
    const container = document.getElementById('about-section');

    if (!container || !nodes)
      return;

    window.onscroll = () => {

      const scrollView = window.scrollY / container.clientHeight / 4 - 0.75;

      if (scrollView < 0.25) {
        this.clearNodes()
        nodes[0].classList.add('bolden-text');
      }
      else if (scrollView > 0.25 && scrollView < 0.5) {
        this.clearNodes()
        nodes[1].classList.add('bolden-text');
      }
      else if (scrollView > 0.5 && scrollView < 0.6) {
        this.clearNodes()
        nodes[2].classList.add('bolden-text');
      }
      else if (scrollView > 0.6) {
        this.clearNodes()
        nodes[3].classList.add('bolden-text');
      }


    }


  }
  private clearNodes() {
    const nodes = document.getElementsByClassName('node');

    if (!nodes)
      return;

    for (let i = 0; i < nodes.length; i++) {
      const element = nodes[i];
      element.classList.remove('bolden-text')
    }
  }
}
