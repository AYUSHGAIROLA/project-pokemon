import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonBodyComponent } from '../components/pokemon-body/pokemon-body.component';
import { PokemonHeaderComponent } from '../components/pokemon-header/pokemon-header.component';
import {
  MatCardModule
} from '@angular/material/card';
// import {
//   MatSpinner
// } from '@angular/material/progress-spinner';
import { AbilitiesFilterPipe } from 'src/pipes/abilitiesFilter.pipe';
import { SearchPipe } from 'src/pipes/search.pipe';
import { TypeFilterPipe } from 'src/pipes/typeFilter.pipe';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, PokemonBodyComponent, PokemonHeaderComponent,
    SearchPipe,
    TypeFilterPipe,
    AbilitiesFilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, MatCardModule, CommonModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [PokemonBodyComponent, PokemonHeaderComponent]
})
export class AppModule {}
