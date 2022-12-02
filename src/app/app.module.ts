import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DialogueGameComponent } from './dialogue-game/dialogue-game.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogueGameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
