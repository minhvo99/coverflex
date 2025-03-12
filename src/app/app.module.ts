import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    AngularSvgIconModule.forRoot(),
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
