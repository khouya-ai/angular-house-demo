import { Component, OnInit } from '@angular/core';
import {House, HouseService} from '../../services/house.service';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  standalone:false,
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {
  houses: House[] = [];

  constructor(private houseService: HouseService) {}

  ngOnInit(): void {
    this.loadHouses();
  }

  loadHouses(): void {
    this.houseService.getHouses().subscribe((data: House[]) => {
      console.log(data.length);
      this.houses = data
    });
  }

  deleteHouse(id: number): void {
    this.houseService.deleteHouse(id).subscribe(() => {
      this.houses = this.houses.filter(house => house.id !== id);
    });
  }
}
