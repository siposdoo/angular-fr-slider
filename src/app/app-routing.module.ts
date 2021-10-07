import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
 import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  { path: '', component: CarouselComponent },
   { path: 'carousel', component: CarouselComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }