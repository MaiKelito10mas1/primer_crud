import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mostrar-imagen',
  templateUrl: './mostrar-imagen.component.html',
  styleUrls: ['./mostrar-imagen.component.scss']
})
export class MostrarImagenComponent {
  @Input() public imagen: string = '';

  public imagenError: string = 'https://thumbs.gfycat.com/AccurateUnfinishedBergerpicard-size_restricted.gif';

  public cambiarImagen(): void {
    this.imagen = this.imagenError;
  }
}
