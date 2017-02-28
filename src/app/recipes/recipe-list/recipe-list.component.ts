import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { Recipe } from '../recipe'; 
//import { RecipeItemComponent } from './recipe-item.component';
@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [];
	@Output() recipeSelected = new EventEmitter<Recipe>();
	recipe = new Recipe('Dummy','Dummy','http://thumbs3.ebaystatic.com/d/l225/m/mwJElNFGmrIXo8ucXNt1M4Q.jpg')
  constructor() { }

  ngOnInit() {

  }
  onSelected(recipe: Recipe){ 	
 		this.recipeSelected.emit(recipe);
 	}
}
