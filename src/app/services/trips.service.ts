import { Injectable } from '@angular/core';

import { Trip } from '../models/trip';
@Injectable()
export class TripService {
    trips: Trip[] = [{
        name: 'India Trip',
        cities: [{
            name: 'Pune',
            places: [{
                name: 'Koregaon park',
            },{
                name: 'Agakhan Palace'
            }]
        },{
            name: 'Delhi',
            places: [{
                name: 'Hauz Khas'
            }]
        }]
    },{
        name: 'US Trip',
        cities: [{
            name: 'Salt lake city',
            places: [{
                name: 'The Grand America Hotel',
            }, {
                name: 'Great Salt lake'
            }]
        }]
    }]
    constructor(){}

    getTrips(): Trip[] {
        return this.trips;
    }

    getTrip(): Trip {
        let tripsIdArray = [0, 1]
        return this.trips[Math.floor(Math.random() * tripsIdArray.length)];
    }
}