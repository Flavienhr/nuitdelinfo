import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DialogueGameComponent } from './dialogue-game/dialogue-game.component';
import { HoledTextGameComponent } from './holed-text-game/holed-text-game.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogueGameComponent,
    HoledTextGameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
