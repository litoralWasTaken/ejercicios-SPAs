import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';
import { CocktailService } from './services/cocktail.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CocktailService],
  bootstrap: [AppComponent]
})
export class AppModule {}
