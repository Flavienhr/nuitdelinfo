import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { DialogueGameComponent } from './dialogue-game/dialogue-game.component';

import { AssociateComponent } from './associate/associate.component';
import { CardAssociateComponent } from './card-associate/card-associate.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,

    DialogueGameComponent,

    AssociateComponent,
    CardAssociateComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
