import { Component, Input } from '@angular/core';

@Component({
  selector: 'ld-button',
  templateUrl: './ld-button.component.html',
  styleUrl: './ld-button.component.scss'
})

export class LdButtonComponent {
  @Input() text: string = '';

}
