import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Cocktail from 'src/app/interfaces/cocktails/Cocktail';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('drink') drink!: Cocktail;

  @Output() drinkClicked: EventEmitter<Cocktail> = new EventEmitter<Cocktail>();

  constructor() {}

  ngOnInit(): void {
  }

  public clickDrink() {
    this.drinkClicked.emit(this.drink);
  }

}
