import { Component } from '@angular/core';
import {House, HouseService} from '../../services/house.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-house-form',
  standalone: false,
  templateUrl: './house-form.component.html',
  styleUrl: './house-form.component.css'
})
export class HouseFormComponent {
  house: House = { name: '', image: '' };

  constructor(private houseService: HouseService,private router: Router) {}

  addHouse(): void {
    if (this.house.name && this.house.image) {
      this.houseService.addHouse(this.house).subscribe(() => {
        this.house = { name: '', image: '' };
        alert('House added!');
        this.router.navigate(['/']);
      });
    }
  }


  exampleData = [
    {
      "id": 10,
      "name": "Happy Homes Group - Gary",
      "image": "https://angular.io/assets/images/tutorials/faa/krzysztof-hepner-978RAXoXnH4-unsplash.jpg"
    },
    {
      "id": 11,
      "name": "Hopeful Apartment Group - Oakland",
      "image": "https://angular.io/assets/images/tutorials/faa/r-architecture-JvQ0Q5IkeMM-unsplash.jpg"
    },
    {
      "id": 12,
      "name": "Seriously Safe Towns - Oakland",
      "image": "https://angular.io/assets/images/tutorials/faa/phil-hearing-IYfp2Ixe9nM-unsplash.jpg"
    },
    {
      "id": 13,
      "name": "Hopeful Housing Solutions - Oakland",
      "image": "https://angular.io/assets/images/tutorials/faa/r-architecture-GGupkreKwxA-unsplash.jpg"
    },
    {
      "id": 14,
      "name": "Seriously Safe Towns - Oakland",
      "image": "https://angular.io/assets/images/tutorials/faa/saru-robert-9rP3mxf8qWI-unsplash.jpg"
    },
    {
      "id": 15,
      "name": "Capital Safe Towns - Portland",
      "image": "https://angular.io/assets/images/tutorials/faa/webaliser-_TPTXZd9mOo-unsplash.jpg"
    },
    {
      "id": 16,
      "name": "Acme Fresh Start Housing - Chicago",
      "image": "https://angular.io/assets/images/tutorials/faa/bernard-hermant-CLKGGwIBTaY-unsplash.jpg"
    },
    {
      "id": 17,
      "name": "A113 Transitional Housing - Santa Monica",
      "image": "https://angular.io/assets/images/tutorials/faa/brandon-griggs-wR11KBaB86U-unsplash.jpg"
    },
    {
      "id": 18,
      "name": "Warm Beds Housing Support - Juneau",
      "image": "https://angular.io/assets/images/tutorials/faa/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg"
    },
    {
      "id": 19,
      "name": "Homesteady Housing - Chicago",
      "image": "https://angular.io/assets/images/tutorials/faa/ian-macdonald-W8z6aiwfi1E-unsplash.jpg"
    }
  ];

  fillForm(example: any): void {
    this.house.name = example.name;
    this.house.image = example.image;
  }

}
