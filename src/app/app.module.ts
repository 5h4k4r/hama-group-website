import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionHeroComponent } from './components/section-hero/section-hero.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { SectionHeroSecondComponent } from './components/section-hero-second/section-hero-second.component';
import { IconsModule } from './icons/icons.module';
import { WhatWeDoComponent } from './components/what-we-do/what-we-do.component';
import { TestComponent } from './components/test/test.component';
import { SectionQuoteComponent } from './components/section-quote/section-quote.component';
import { SectionAboutComponent } from './components/section-about/section-about.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionHeroComponent,
    NavBarComponent,
    HomeComponent,
    SectionHeroSecondComponent,
    WhatWeDoComponent,
    TestComponent,
    SectionQuoteComponent,
    SectionAboutComponent
  ],
  imports: [
    BrowserModule,
    IconsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
