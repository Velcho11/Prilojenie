import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import { PlacesService } from '../../services/place.service';


@Component({
  selector: 'page-new-location',
  templateUrl: 'new-location.html',
})
export class NewLocationPage {

  constructor(private placesService: PlacesService, private navCtrl: NavController) {}
onAddLocation(value: {title:string}){
this.placesService.addPlace(value);
this.navCtrl.pop();
}
}
