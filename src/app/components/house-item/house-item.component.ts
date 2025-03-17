import {Component, EventEmitter, Input, Output} from '@angular/core';
import {House} from '../../services/house.service';

@Component({
  selector: 'app-house-item',
  standalone: false,
  templateUrl: './house-item.component.html',
  styleUrl: './house-item.component.css'
})
export class HouseItemComponent {

  @Input() item!:House;
  @Output() onDeleteHouse: EventEmitter<number> = new EventEmitter<number>();

  deleteHouse(houseId:number){
    if(confirm("Are you sure you want to delete?"))
      this.onDeleteHouse.emit(houseId);
}

}
