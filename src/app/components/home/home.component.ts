import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'HomeComponent',
  imports: [HousingLocationComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  housingService: HousingService = inject(HousingService);
  housingLocationList: HousingLocation[] = [];
  housingLocationListFiltered: HousingLocation[] = [];

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocation();
    this.housingLocationListFiltered = this.housingLocationList;
  }

  filterHousing(text: string) {
    if (!text) {
      this.housingLocationListFiltered = this.housingLocationList;
      return;
    }
    this.housingLocationListFiltered = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation?.city
          .toLocaleLowerCase()
          .includes(text.toLocaleLowerCase())
    );
  }
}
