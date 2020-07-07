import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewLocationPage } from '../new-location/new-location';
import { PlacesService } from '../../services/place.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
places:{title: string}[] =[];

  constructor(public navCtrl: NavController,private placesService: PlacesService) {

  }
  ionViewWillEnter(){
this.places = this.placesService.getPlace();
  }
  onLoadNewLocation(){
    this.navCtrl.push(NewLocationPage);
  }
}
