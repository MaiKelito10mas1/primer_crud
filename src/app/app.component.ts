import { Component } from '@angular/core';
import { Pokemon } from './modelos/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public primeraImagen: string = 'https://i.pinimg.com/originals/18/d7/fa/18d7fa976c480fdf29e11ff90c823bac.png';
  public segundaImagen: string = 'https://pbs.twimg.com/media/EsMJa80XAAQ2b24?format=jpg&name=large';
  public terceraImagen: string = 'https://https://static.wixstatic.com/media/a604ca_b08dba561b73459fbaa5fce71c0e6947.jpg/v1/fill/w_600,h_812,al_c,q_90/a604ca_b08dba561b73459fbaa5fce71c0e6947.jpg'

  public listaPokemon: Array<Pokemon> = [
    {
      npd: 1,
      nombre: "Bulbasaur",
      foto: 'https://i.pinimg.com/originals/82/42/25/824225f61b9e0efb7e7405f8c9579f6c.png',
      tipo: 'Planta',
      naturaleza: 'Serio',
      ataqueBase: 20
    },
    {
      npd: 2,
      nombre: 'Charmander',
      foto: 'https://www.wikihow.com/images/4/4c/Draw-Charmander-Step-22.jpg',
      tipo: 'Fuego',
      naturaleza: 'Timido',
      ataqueBase: 30
    }
  ]

  public escucharPokemon(nuevoP: Pokemon): void{
    this.listaPokemon.push(nuevoP);
  }
}
