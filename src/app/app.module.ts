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
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { SectionWhatDoWeDoComponent } from './components/section-what-do-we-do/section-what-do-we-do.component';
import { SectionContactComponent } from './components/section-contact/section-contact.component';
import { HorizontalScrollCardsComponent } from './components/horizontal-scroll-cards/horizontal-scroll-cards.component';
import { MobileScrollCardsComponent } from './components/mobile-scroll-cards/mobile-scroll-cards.component';
import { SectionCopyrightComponent } from './components/section-copyright/section-copyright.component';


const firebaseConfig = {
  apiKey: "AIzaSyB46O44zcLIKbU8nKFoJ7r_a-Y6MkR8eQI",
  authDomain: "hama-group-website.firebaseapp.com",
  projectId: "hama-group-website",
  storageBucket: "hama-group-website.appspot.com",
  messagingSenderId: "496167338931",
  appId: "1:496167338931:web:78b2699dcc3c564ed5c1c6"
};

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
    SectionAboutComponent,
    SectionWhatDoWeDoComponent,
    SectionContactComponent,
    HorizontalScrollCardsComponent,
    MobileScrollCardsComponent,
    SectionCopyrightComponent,


  ],
  imports: [
    BrowserModule,
    IconsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
