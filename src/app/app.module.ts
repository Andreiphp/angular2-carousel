import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarouselModule } from 'angular2-carousel';
import { SimpleCarouselComponent } from './components/simple-carousel/simple-carousel.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import { ExamplesComponent } from './pages/examples/examples.component';
import { ApiComponent } from './pages/api/api.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { PropertiesCarouselComponent } from './components/properties-carousel/properties-carousel.component';
import { FunctionsCarouselComponent } from './components/functions-carousel/functions-carousel.component';
import {SafeHtmlPipe} from "./pipes/pipe.safehtml";
import { CubeCarouselComponent } from './components/cube-carousel/cube-carousel.component';
import { StyleCarouselComponent } from './components/style-carousel/style-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleCarouselComponent,
    ExamplesComponent,
    ApiComponent,
    SafeHtmlPipe,
    GetStartedComponent,
    PropertiesCarouselComponent,
    FunctionsCarouselComponent,
    CubeCarouselComponent,
    StyleCarouselComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    CarouselModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
