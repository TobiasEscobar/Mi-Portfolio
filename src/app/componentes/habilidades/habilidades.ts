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
        nombre: 'Lenguajes',
        icono: 'bi-server',
        tecnologias: ['JavaScript', 'TypeScript', 'Java',
          'Python']
      },
      {
        nombre: 'Backend & Bases de Datos',
        icono: 'bi-server',
        tecnologias: [
          'Node.js', 'Express.js', 'Nest.js', 'PostgreSQL (Supabase)',
          'MySQL', 'MongoDB' 
        ]
      },
      {
        nombre: 'Herramientas & Gestión',
        icono: 'bi-tools',
        tecnologias: [
          'Git / GitHub', 'Vercel/Render', 'Postman', 'Scrum / Agile', 
          'Jira', 'Swagger'
        ]
      },
      {
        nombre: 'Frontend & Complementarios',
        icono: 'bi-window-fullscreen',
        tecnologias: [
          'Angular 17+', 'Bootstrap 5', 'HTML5 / CSS3'
        ]
      },
    ];
}
