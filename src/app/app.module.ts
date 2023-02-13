import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ShopComponent } from './shop/shop.component';
import { RouterOutlet } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { BlogComponent } from './blog/blog.component';
import { EventsComponent } from './events/events.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterContentComponent } from './footer-content/footer-content.component';
import { AboutMeComponent } from './footer-content/about-me/about-me.component';
import { ContactComponent } from './footer-content/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ShopComponent,
    BlogComponent,
    EventsComponent,
    NavbarComponent,
    FooterContentComponent,
    AboutMeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
