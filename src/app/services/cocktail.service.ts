import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import CocktailList from '../interfaces/cocktails/CocktailList';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private cocktailUrl: String = 'https://thecocktaildb.com/api/json/v1/1';


  constructor(private httpClient: HttpClient) {

  }

  getRandomCocktail(): Observable<CocktailList> {
    return this.httpClient.get<CocktailList>(`${this.cocktailUrl}/random.php`)
  }

  getAlcoholicDrinks(): Observable<CocktailList> {
    return this.httpClient.get<CocktailList>(`${this.cocktailUrl}/filter.php?a=Alcoholic`)
  }

  getDrinkById(id: String): Observable<CocktailList> {
    return this.httpClient.get<CocktailList>(`${this.cocktailUrl}/lookup.php?i=${id}`)
  }

}
