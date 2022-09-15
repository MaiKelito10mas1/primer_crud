import { Component, Input } from '@angular/core';
import { Pokemon } from './../../modelos/pokemon';
@Component({
  selector: 'app-listar-pokemones',
  templateUrl: './listar-pokemones.component.html',
  styleUrls: ['./listar-pokemones.component.scss']
})
export class ListarPokemonesComponent  {
  @Input() public pokemones!: Array<Pokemon>;
}
