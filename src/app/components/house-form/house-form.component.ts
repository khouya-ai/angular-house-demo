import { Component } from '@angular/core';
import {House, HouseService} from '../../services/house.service';

@Component({
  selector: 'app-house-form',
  standalone: false,
  templateUrl: './house-form.component.html',
  styleUrl: './house-form.component.css'
})
export class HouseFormComponent {
  house: House = { name: '', image: '' };

  constructor(private houseService: HouseService) {}

  addHouse(): void {
    if (this.house.name && this.house.image) {
      this.houseService.addHouse(this.house).subscribe(() => {
        this.house = { name: '', image: '' };
        alert('House added!');
      });
    }
  }


  exampleData = [

    {
      "name": "Happy Homes Group - Gary",
      "image": "https://angular.io/assets/images/tutorials/faa/krzysztof-hepner-978RAXoXnH4-unsplash.jpg"
    },
    {
      "name": "Hopeful Apartment Group - Oakland",
      "image": "https://angular.io/assets/images/tutorials/faa/r-architecture-JvQ0Q5IkeMM-unsplash.jpg"
    },
    {
      "name": "Seriously Safe Towns - Oakland",
      "image": "https://angular.io/assets/images/tutorials/faa/phil-hearing-IYfp2Ixe9nM-unsplash.jpg"
    },
    {
      "name": "Hopeful Housing Solutions - Oakland",
      "image": "https://angular.io/assets/images/tutorials/faa/r-architecture-GGupkreKwxA-unsplash.jpg"
    },
    {
      "name": "Seriously Safe Towns - Oakland",
      "image": "https://angular.io/assets/images/tutorials/faa/saru-robert-9rP3mxf8qWI-unsplash.jpg"
    },
    {
      "name": "Capital Safe Towns - Portland",
      "image": "https://angular.io/assets/images/tutorials/faa/webaliser-_TPTXZd9mOo-unsplash.jpg"
    }
  ];

  fillForm(example: any): void {
    this.house.name = example.name;
    this.house.image = example.image;
  }

}
