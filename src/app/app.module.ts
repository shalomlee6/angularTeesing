import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgCircleProgressModule} from 'ng-circle-progress';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import {HttpClientModule} from '@angular/common/http';
import { DataService } from './services/data.service';
import { LoaderComponent } from './components/loader/loader.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({
      radius: 16,
      outerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 3000
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
