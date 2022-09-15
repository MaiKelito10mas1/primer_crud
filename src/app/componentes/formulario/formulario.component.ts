import { Component, Output, EventEmitter } from '@angular/core';
import { Pokemon, NaturalezaPokemon, TipoPokemon } from './../../modelos/pokemon'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  public nts: Array<string> = [
    'Timido',
    'Serio',
    'Agresivo',
  ]
  public tipos: Array<string> = [
    'Agua' ,
     'Fuego' ,
     'Planta' ,
     'Roca' ,
     'Veneno',
  ]

  public pokemon: Pokemon = {
    npd: 0, //input type number
    nombre: '', // input type text
    foto: '', // input type url
    ataqueBase: 0, // input type range
    naturaleza: 'Agresivo', // select
    tipo: 'Agua' // select
  }

  public cNpd(evento: Event): void{
    const ele = evento.target as HTMLInputElement;
    this.pokemon.npd = Number.parseInt(ele.value) || 0;
  }
  public cNombre(evento: Event): void{
    const ele = evento.target as HTMLInputElement;
    this.pokemon.nombre = ele.value;
  }
  public cFoto(evento: Event): void{
    const ele = evento.target as HTMLInputElement;
    this.pokemon.foto = ele.value;
  }
  public cAb(evento: Event): void{
    const ele = evento.target as HTMLInputElement;
    this.pokemon.ataqueBase = Number.parseInt(ele.value) || 0;
  }
  public cNatu(evento: Event): void{
    const ele = evento.target as HTMLSelectElement;
    this.pokemon.naturaleza = ele.value as NaturalezaPokemon;
  }
  public cTipo(evento: Event): void{
    const ele = evento.target as HTMLSelectElement;
    this.pokemon.tipo = ele.value as TipoPokemon;
  }
  @Output() public enviarPokemon = new EventEmitter<Pokemon>();
  public guardarElemento(){
    // copia de un objeto de un nivel
    const copia: Pokemon = {
      ...this.pokemon
    }
    this.enviarPokemon.emit(copia);
    this.pokemon = {
      npd: 0, //input type number
      nombre: '', // input type text
      foto: '', // input type url
      ataqueBase: 0, // input type range
      naturaleza: 'Agresivo', // select
      tipo: 'Agua' // select
    }
  }

}
