import { City } from './../../models/city';
import { Place } from './../../models/place';
import { TripService } from './../../services/trips.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Trip } from '../../models/trip';
import { Observable } from 'rxjs/Observable';
import { 
  Form, FormGroup, FormBuilder, 
  FormArray, Validators, FormControl 
} from '@angular/forms';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'trip-edit',
  templateUrl: './trip-edit.component.html',
  styleUrls: ['./trip-edit.component.css']
})
export class TripEditComponent {
  trip: Trip;
  tripForm: FormGroup;
  editingStatus: boolean = false;

  constructor(private fb: FormBuilder, 
              private activatedRoute: ActivatedRoute,
              private trips: TripService) {
    if('id' in this.activatedRoute.snapshot.params) {
      this.editingStatus = true;
    }
  }

  ngOnInit() {
    // Fetch the trip id if it is present then get the trip and pass it to
    // the initForm method.
    if (this.editingStatus) {
      this.trip = this.trips.getTrip()
      this.initForm(this.trip) // handles both the create and edit logic
    } else {
      this.initForm() // handles both the create and edit logic
    }
  }

  /**
   * Sends update and create method requests to the api
   * @method onSubmit
   */
  onSubmit() {
    if( this.tripForm.valid ) {
      console.log('trip form is valid');
    }
  }

  /**
   * Initialises the tripForm 
   * @method initForm
   */
  initForm(trip?: Trip):void {
    let name: string;
    if(trip) {
      name = trip.name;
    } else {
      name = '';
    }
    // let name = 'Dubai Trip';
    let cities: FormArray = new FormArray([]);
    let places: FormArray = new FormArray([]);
    
    this.tripForm = new FormGroup({
      name: new FormControl('', Validators.required), 
      cities: cities
    })
    // Creating a new trip
    if(!trip) {
      this.addCity();
      this.addPlace(0);
    } else {
    // Editing a trip 
      trip.cities.forEach((city, cityIndex) => {
        this.addCity(city);
        city.places.forEach((place, placeIndex) =>{
          this.addPlace(cityIndex, place);
        })
      })
    }
  }

  /**
   * Adds a city FormGroup to the cities <FormArray>FormControl(__cities__)
   * @method addCity
   * @param void
   * @return void
   */
  addCity(city?: City):void {
    let places = new FormArray([]);
    let name = city ? city.name : '';
    (<FormArray>this.tripForm.controls['cities']).push(
      new FormGroup({
        name: new FormControl(name, Validators.required),
        places: places
      })
    )
  }

  /**
   * Adds a place FormGroup to the city's <FormArray>FormControl(__places__)
   * @method addPlace
   * @param {cityIndex} index of the city to which place is to be added
   * @return {void}
   */
  addPlace(cityIndex: number, place?: Place):void {
    let name = place ? place.name : '';
    
    (<FormArray>(<FormGroup>(<FormArray>this.tripForm.controls['cities'])
      .controls[cityIndex]).controls['places']).push(
        new FormGroup({
          name: new FormControl(name, Validators.required),
        })
    )
  }

}
