import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonBodyComponent } from '../components/pokemon-body/pokemon-body.component';
import { PokemonHeaderComponent } from '../components/pokemon-header/pokemon-header.component';
import {
  MatCardModule
} from '@angular/material/card';
import {
  MatToolbarModule
} from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AbilitiesFilterPipe } from 'src/pipes/abilitiesFilter.pipe';
import { SearchPipe } from 'src/pipes/search.pipe';
import { TypeFilterPipe } from 'src/pipes/typeFilter.pipe';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, PokemonBodyComponent, PokemonHeaderComponent,
    SearchPipe,
    TypeFilterPipe,
    AbilitiesFilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, MatCardModule, CommonModule, HttpClientModule, MatToolbarModule, FormsModule, ReactiveFormsModule, MatInputModule, MatIconModule, MatFormFieldModule, MatSelectModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [PokemonBodyComponent, PokemonHeaderComponent]
})
export class AppModule {}
