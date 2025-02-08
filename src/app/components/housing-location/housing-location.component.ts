import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'HousingLocationComponent',
  imports: [RouterModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css',
})
export class HousingLocationComponent {
  // Esta propiedad se le pasa desde el componente padre (HomeComponent)
  // La entrada espera un valor, por eso ponemos la  ! para forzar porque no tenemos
  // valor predeterminado
  @Input() housingLocation!: HousingLocation;
}
