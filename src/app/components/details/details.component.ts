import { Component, inject } from '@angular/core';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  formTestAngular = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });
  submitApplicationOnSubmit() {
    this.housingService.submitAplication(
      this.formTestAngular.value.firstName ?? '',
      this.formTestAngular.value.lastName ?? '',
      this.formTestAngular.value.email ?? ''
    );
  }
  //devuelve la ruta en la que nos encontramos
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);

  housingLocation: HousingLocation | undefined =
    this.housingService.getHousingById(
      Number(this.route.snapshot.params['id'])
    );
}
