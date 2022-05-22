import { animate, style, transition, trigger } from '@angular/animations';

export const growIn = trigger('growIn', [
  transition(':increment', [style({ transform: 'scale(0.3)', opacity: 0 }), animate('500ms ease-in-out', style({ transform: '*', opacity: 1 }))])
]);
