import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { HttpClientModule } from '@angular/common/http';
import { ApinewsService } from './services/apinews.service';
import { TechComponent } from './tech/tech.component';
import { BuzzComponent } from './buzz/buzz.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadlinesComponent,
    TechComponent,
    BuzzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ ApinewsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
