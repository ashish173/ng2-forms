import { TripService } from './services/trips.service';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes } from './app.routes'
import { AppComponent } from './app.component';
import { TripEditComponent } from './components/trip-edit/trip-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TripEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [TripService],
  bootstrap: [AppComponent]
})
export class AppModule { }
