import { Component, OnInit, ViewChild } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  @ViewChild("placesRef") placesRef !: GooglePlaceDirective;
  constructor() { }

  ngOnInit(): void {
  }
  public handleAddressChange(address: Address) {
    // Do some stuff
    console.log(address);
}

}
