export type TipoPokemon = 'Agua' | 'Fuego' | 'Planta' | 'Roca' | 'Veneno';
export type NaturalezaPokemon = 'Timido' | 'Serio' | 'Agresivo';
export interface Pokemon {
  npd: number;
  nombre: string;
  foto: string;
  tipo: TipoPokemon;
  naturaleza: NaturalezaPokemon;
  ataqueBase: number;
}


