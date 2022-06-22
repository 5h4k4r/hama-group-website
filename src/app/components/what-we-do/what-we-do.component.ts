import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.scss']
})
export class WhatWeDoComponent {
  @ViewChild('testDiv', { static: false }) private testDiv: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('testDiv2', { static: false }) private testDiv2: ElementRef<HTMLDivElement> | undefined;
  isTestDivScrolledIntoView: boolean | undefined;
  isTestDiv2ScrolledIntoView: boolean | undefined;

  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView() {
    if (this.testDiv) {
      const rect = this.testDiv.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      const isInCenter = rect.top >= 0 && rect.top < 300;
      this.isTestDivScrolledIntoView = topShown || bottomShown;
      // console.log({
      //   isTestDivScrolledIntoView: this.isTestDivScrolledIntoView, top: rect.top, bottom: rect.bottom, innerHeight: window.innerHeight,
      // });
      // console.log({ isTestDiv2ScrolledIntoView: this.isTestDiv2ScrolledIntoView, })
    }
    if (this.testDiv2) {
      const rect = this.testDiv2.nativeElement.getBoundingClientRect();
      const minYMargin = 500;
      const bottomShown = rect.bottom <= window.innerHeight && rect.bottom > minYMargin * 2;
      const topShown = rect.top <= 110 && rect.bottom > minYMargin && rect.top > 0;
      const isInCenter = rect.bottom > minYMargin * 2 && rect.top < 0;
      this.isTestDiv2ScrolledIntoView = topShown || bottomShown || isInCenter;
      // console.log({
      //   topShown, bottomShown, top: rect.top, bottom: rect.bottom, innerHeight: window.innerHeight,
      // });
      // console.log(this.isTestDiv2ScrolledIntoView)

    }
  }

}
