import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Iron Man', 'Hulk', 'Thor'];
  heroeBorrado: string = '';

  borrarHeroe(): string{
    
    const heroeBorrado = this.heroes.splice(0, 1).toString();
    // this.heroes.shift();

    return this.heroeBorrado = heroeBorrado;

  }



}
