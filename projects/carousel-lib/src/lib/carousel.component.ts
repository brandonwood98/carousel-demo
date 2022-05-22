import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CarouselVariant, Slide} from "./types";
import {growIn} from "./animations/grow-in.animation";

@Component({
  selector: 'mtn-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [growIn]
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input()
  variant: CarouselVariant = 'light';

  @Input()
  slides: Slide[] = [
    {title: 'Mobile internet', cta: 'Start here'},
    {title: 'Home internet', cta: 'Start here'},
    {title: 'Get a device', cta: 'Start here'},
    {title: 'Add a phone-line', cta: 'Start here'},
    {title: 'Upgrade', cta: 'Start here'}
  ];

  isTablet = false;

  private middleIndex = Math.floor((this.slides.length - 1) / 2)
  private query: MediaQueryList;
  private offset = 0;

  get startSlides(): Slide[] {
    return this.slides.slice(this.offset, this.middleIndex);
  }

  get focusedSlide(): Slide {
    return <Slide>this.slides[this.middleIndex];
  }

  get endSlides(): Slide[] {
    return this.slides.slice(this.middleIndex + 1, this.middleIndex + 3 - this.offset);
  }

  constructor() {
    this.query = window.matchMedia("(max-width: 996px)");
    this.onMediaChange();
    this.query.addEventListener('change', this.onMediaChange);
  }

  ngOnInit(): void {
  }

  onMediaChange = () => {
    this.isTablet = this.query.matches;
    this.offset = this.isTablet ? 1 : 0;
  }

  back() {
    const poppedSlide = this.slides.pop();
    poppedSlide && this.slides.unshift(poppedSlide);
  }

  next() {
    const shiftedSlide = this.slides.shift();
    shiftedSlide && this.slides.push(shiftedSlide);
  }

  ngOnDestroy() {
    this.query.removeEventListener('change', this.onMediaChange);
  }
}
