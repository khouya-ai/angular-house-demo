import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Le service est disponible dans toute l'application
})
export class DataService {
  private data: string = 'Données partagées';

  getData(): string {
    return this.data;
  }

  setData(newData: string): void {
    this.data =newData;
  }
}
