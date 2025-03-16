import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface House {
  id?: number;
  name: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private apiUrl = 'http://localhost:3000/houses';

  constructor(private http: HttpClient) {}

  getHouses(): Observable<House[]> {
    return this.http.get<House[]>(this.apiUrl);
  }

  addHouse(house: House): Observable<House> {
    return this.http.post<House>(this.apiUrl, house);
  }

  deleteHouse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
