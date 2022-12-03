import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { DialogueGameComponent } from './dialogue-game/dialogue-game.component';

import { AssociateComponent } from './associate/associate.component';
import { CardAssociateComponent } from './card-associate/card-associate.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MapComponent } from './map/map.component';
import {HomeComponent} from "./home/home.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogueGameComponent,

    AssociateComponent,
    CardAssociateComponent,
    NavbarComponent,
    MapComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
