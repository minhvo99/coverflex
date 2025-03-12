import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cover-flex';

  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      AOS.init({
        duration:1000
      });
    }
  }
}