import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
 import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent
     
  ],
  imports: [
    IvyCarouselModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
