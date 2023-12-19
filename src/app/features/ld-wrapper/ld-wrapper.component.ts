import { Component, Input } from '@angular/core';

export type TLdWrapperCol = 'one-col' | 'two-col';

@Component({
  selector: 'ld-wrapper',
  templateUrl: './ld-wrapper.component.html',
  styleUrl: './ld-wrapper.component.scss'
})

export class LdWrapperComponent {
  @Input() type: TLdWrapperCol = 'two-col';
}
