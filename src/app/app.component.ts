import { Component } from '@angular/core';
import { CocktailService } from './services/cocktail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    // this.cocktailService.getRandomCocktail().subscribe(
    //   res => { console.log(res) },
    //   error => console.log(error),
    // )
  }

}
