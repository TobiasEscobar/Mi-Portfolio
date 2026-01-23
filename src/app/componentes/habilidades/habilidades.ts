import { Component } from '@angular/core';

interface CategoriaHabilidad {
  nombre: string;
  icono: string;
  tecnologias: string[];
}

@Component({
  selector: 'app-habilidades',
  imports: [],
  templateUrl: './habilidades.html',
  styleUrl: './habilidades.scss',
})
export class Habilidades {

  public listaHabilidades: CategoriaHabilidad[] = [
      {
        nombre: 'Frontend & Frameworks',
        icono: 'bi-window-fullscreen',
        tecnologias: [
          'Angular 17+', 'TypeScript', 'JavaScript (ES6+)', 
          'Bootstrap 5', 'HTML5', 'CSS3 / SASS'
        ]
      },
      {
        nombre: 'Backend & Bases de Datos',
        icono: 'bi-server',
        tecnologias: [
          'Node.js', 'Nest.js', 'MySQL', 'MongoDB', 
          'Express', 'Python'
        ]
      },
      {
        nombre: 'Herramientas & Gestión',
        icono: 'bi-tools',
        tecnologias: [
          'Git', 'GitHub', 'Vercel', 'Postman', 'Scrum / Agile', 'Trello'
        ]
      }
    ];
}
