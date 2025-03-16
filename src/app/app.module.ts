import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { HouseListComponent } from './components/house-list/house-list.component';
import { HouseFormComponent } from './components/house-form/house-form.component';
import {FormsModule} from '@angular/forms';
import {provideHttpClient} from '@angular/common/http';
import { HouseItemComponent } from './components/house-item/house-item.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: HouseListComponent },
  { path: 'add', component: HouseFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HouseFormComponent,
    HouseItemComponent,
    HouseListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
