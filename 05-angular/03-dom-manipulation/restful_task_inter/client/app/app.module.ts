import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';

import * as fromTasks from './tasks';
import * as fromServices from './services';


@NgModule({
  declarations: [
    AppComponent,
    ...fromTasks.components,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ...fromServices.services,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
