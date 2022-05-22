import {NgModule} from '@angular/core';
import {CarouselComponent} from './carousel.component';
import {CarouselCardComponent} from './carousel-card/carousel-card.component';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    CarouselComponent,
    CarouselCardComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    CarouselComponent, CarouselCardComponent
  ]
})
export class CarouselModule { }
