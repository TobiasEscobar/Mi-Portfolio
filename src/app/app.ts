import { Component, signal } from '@angular/core';
import { Navbar } from './componentes/navbar/navbar';
import { SobreMi } from './componentes/sobre-mi/sobre-mi';
import { Estudios } from './componentes/estudios/estudios';
import { Habilidades } from './componentes/habilidades/habilidades';
import { Proyectos } from './componentes/proyectos/proyectos';
import { Contacto } from './componentes/contacto/contacto';

@Component({
  selector: 'app-root',
  imports: [Navbar, SobreMi, Estudios, Habilidades, Proyectos, Contacto],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mi-portfolio');
}
