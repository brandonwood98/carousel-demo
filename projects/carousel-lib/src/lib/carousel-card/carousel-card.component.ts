import {Component, Input, OnInit} from '@angular/core';
import {CarouselVariant} from "../types";

@Component({
  selector: 'mtn-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.scss'],
})
export class CarouselCardComponent implements OnInit {
  @Input()
  variant: CarouselVariant = 'light';

  @Input()
  focused = true;

  constructor() { }

  ngOnInit(): void {
  }

}
