import { Component } from '@angular/core';
import { Pokemon } from 'src/modules/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex';
  logo = "../assets/logo.webp";
  imgProfile: string = "../assets/photoPerfil.jpg";
  links: string[] = ['Home', 'Pokedex', 'Video Game', 'Card Games', 'Eventos'];

  pokemons: Pokemon[] = [
    new Pokemon(1, 'Pikachu', ['Eletrico'], 'Esse é o Pikachu', 
    'https://www.pngmart.com/files/2/Pikachu-PNG-File.png', ['250']),
    new Pokemon(2, 'Bulbasaur', ['Grama', 'Veneno'], 'Esse é o Bulbasaur', 
    'https://i.pinimg.com/originals/c6/17/aa/c617aa52286fc2620ca773e6d6b62ffb.png', ['45']),
    new Pokemon(1, 'Charmander', ['Fogo'], 'Esse é o Charmander', 
    'https://i.pinimg.com/originals/f2/95/76/f295769d9bd3c34ffc552e837f5304ae.png', ['76']),
    new Pokemon(2, 'Squirtle', ['Agua'], 'Esse é o Squirtle',
    'https://assets.stickpng.com/images/580b57fcd9996e24bc43c32a.png', ['90']),
  
  ];

  selectedPokemon?: Pokemon;

  showDetails(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
  }

  closeModal() {
    this.selectedPokemon = undefined;
  }

  filterValue: string = '';
  filteredPokemons(): Pokemon[] {
    if (!this.filterValue) {
      return this.pokemons; 
    }
    return this.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.filterValue.toLowerCase()))
  }
}


