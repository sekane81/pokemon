import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {

}

export const environment = {
  production:false,
  baseUrl:'https://pokeapi.co/api/v2/'
};
