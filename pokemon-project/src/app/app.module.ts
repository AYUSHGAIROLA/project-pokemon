import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonBodyComponent } from '../components/pokemon-body/pokemon-body.component';
import { PokemonHeaderComponent } from '../components/pokemon-header/pokemon-header.component';

@NgModule({
  declarations: [AppComponent, PokemonBodyComponent, PokemonHeaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
