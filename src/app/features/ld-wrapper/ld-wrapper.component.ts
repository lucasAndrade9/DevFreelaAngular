import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

export type TLdWrapperCol = 'one-col' | 'two-col';

@Component({
  selector: 'ld-wrapper',
  templateUrl: './ld-wrapper.component.html',
  styleUrl: './ld-wrapper.component.scss'
})

export class LdWrapperComponent {
  @Input() type: TLdWrapperCol = 'two-col';
  @Input() back: string = '';

  constructor(private router: Router) { }

  redirectTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
