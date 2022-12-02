import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AssociateComponent } from './associate/associate.component';
import { CardComponent } from './card/card.component';
import { CardMemoComponent } from './card-memo/card-memo.component';
import { CardAssociateComponent } from './card-associate/card-associate.component';

@NgModule({
  declarations: [
    AppComponent,
    AssociateComponent,
    CardComponent,
    CardMemoComponent,
    CardAssociateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
