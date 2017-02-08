import { TripEditComponent } from './components/trip-edit/trip-edit.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
	{ path: '', redirectTo: 'trip/create', pathMatch: 'full' },
	{ path: 'trip/create', component: TripEditComponent },
	{ path: 'trip/:id/edit', component: TripEditComponent },
];