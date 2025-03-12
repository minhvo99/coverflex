import { Component, Input } from '@angular/core';

@Component({
  selector: 'section-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
@Input() title!: string;
@Input() description!: string;
}
