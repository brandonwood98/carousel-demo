import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'mtn-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.scss']
})
export class CarouselCardComponent implements OnInit {
  @Input()
  variant: 'light' | 'dark' = 'light';

  @Input()
  focused = true;

  constructor() { }

  ngOnInit(): void {
  }

}
