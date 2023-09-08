import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Cocktail from 'src/app/interfaces/cocktails/Cocktail';
import CocktailList from 'src/app/interfaces/cocktails/CocktailList';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  public cocktailList!: Observable<CocktailList>;
  public cocktailError: String;
  public cocktailClicked?: Cocktail;
  constructor(private cocktailService: CocktailService) {
    this.cocktailError = "";
  }

  ngOnInit(): void {
    this.cocktailList = this.cocktailService.getAlcoholicDrinks();
  }

  public showDrinkClicked(cocktailClicked: Cocktail) {
    this.cocktailService.getDrinkById(cocktailClicked.idDrink).subscribe(
      res => { this.cocktailClicked = res.drinks[0] },
      error => { this.cocktailError = error }
    )
  }



}
