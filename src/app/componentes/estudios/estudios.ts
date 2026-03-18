import { Component } from '@angular/core';

interface Estudio {
  nombreInstitucion: string;
  titulo: string;
  periodo: string;
  descripcion: string;
  url?: string;
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
      nombreInstitucion: 'Igrowker',
      titulo: 'Certified Agile Digital Product Practitioner™ (CADPP)',
      periodo: 'Febrero 2026 - Marzo 2026',
      descripcion: 'Certificación obtenida tras completar 75 horas de entrenamiento práctico. Acreditación de competencias como Desarrollador Backend trabajando en un equipo multidisciplinario, gestionando tareas y aplicando metodologías ágiles para el desarrollo de un producto de software con inteligencia artificial integrada.',
      url: "https://igrowker.com/certificate/AHZQU94X4J24UEGW"
    },
    {
    nombreInstitucion: 'Universidad Tecnológica Nacional (UTN)',
      titulo: 'Tecnicatura en Programación Universitaria',
      periodo: '2023 - Finalizando para Julio de 2026',
      descripcion: 'Formación integral en desarrollo de software, fundamentos de programación, algoritmos, bases de datos y arquitectura de sistemas. Enfoque práctico en metodologías ágiles, trabajo en equipo y buenas practicas de programación.'
    },
    {
      nombreInstitucion: 'Universidad de Buenos Aires (UBA)',
      titulo: 'Ingeniería en Informática',
      periodo: '2026 - En curso',
      descripcion: 'Iniciando la formación de grado para complementar mi perfil práctico con fundamentos sólidos en ciencias exactas y arquitectura de computadoras. El objetivo principal es profundizar en el diseño de sistemas complejos, escalabilidad y principios avanzados de ingeniería de software.'
    }
  ];

  public navegarA(url: string): void {
    window.open(url, '_blank');
  }
}
