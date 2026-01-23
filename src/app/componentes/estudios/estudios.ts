import { Component } from '@angular/core';

interface Estudio {
  nombreInstitucion: string;
  titulo: string;
  periodo: string;
  descripcion: string;
  
}

@Component({
  selector: 'app-estudios',
  imports: [],
  templateUrl: './estudios.html',
  styleUrl: './estudios.scss',
})
export class Estudios {

  public listaEstudios: Estudio[] = [
    {
    nombreInstitucion: 'Universidad Tecnológica Nacional (UTN)',
      titulo: 'Tecnicatura en Programación Universitaria',
      periodo: '2023 - en curso',
      descripcion: 'Formación integral en desarrollo de software, fundamentos de programación, algoritmos, bases de datos y arquitectura de sistemas. Enfoque práctico en metodologías ágiles, trabajo en equipo y buenas practicas de programación.'
    },
    {
      nombreInstitucion: 'Formación Autodidacta y Proyectos',
      titulo: 'Full Stack Developer',
      periodo: '2023 - Presente',
      descripcion: 'Profundización técnica en stack MEAN/MERN. Implementación de autenticación (JWT), manejo de bases de datos NoSQL (MongoDB) y creación de interfaces reactivas modernas con Bootstrap y Angular Material. Aprendizaje basado en documentación oficial y desarrollo de productos MVP.'
    }
  ];
}
