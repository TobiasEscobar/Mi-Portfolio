import { Component } from '@angular/core';

declare var bootstrap: any;

interface Proyecto {
  titulo: string;
  descripcion: string;
  imagenPortada: string;
  tecnologias: string[];
  imagenes?: string[];
  repoUrl?: string;
  demoUrl?: string;
}

@Component({
  selector: 'app-proyectos',
  standalone: true, 
  imports: [],
  templateUrl: './proyectos.html',
  styleUrls: ['./proyectos.scss']
})
export class Proyectos {

  public imagenesSeleccionadas: string[] = [];
  public tituloProyectoSeleccionado: string = '';

  public listaProyectos: Proyecto[] = [
    {
      titulo: 'Vetween VMS',
      descripcion: 'Plataforma VMS para clínicas veterinarias desarrollada en equipo (en la capacitacion para juniors IT de Igrowker). Incluye gestión de pacientes, responsables, visitas y resúmenes con IA. A cargo del desarrollo backend, estructurando bases de datos y endpoints. [Actualmente en desarrollo].',
      imagenPortada: 'vetween/vetween-login.jpeg',
      tecnologias: ['Node.js', 'Express.js', 'JavaScript', 'PostgreSQL(Supabase)', 'Swagger', 'SCRUM'],
      imagenes: ['vetween/vetween-login.jpeg', 'vetween/vetween-pacientes.jpeg', 'vetween/vetween-responsables.jpeg', 
        'vetween/vetween-resumen.jpeg', 'vetween/vetween-cuenta.jpeg', 'vetween/vetween-resumenIA.jpeg', 
        'vetween/vetween-paciente-perfil.jpeg', 'vetween/vetween-visitas.jpeg'
      ]
    },
    {
      titulo: 'Red Social InstaDev',
      descripcion: 'Red social full stack con autenticación, gestión de usuarios y publicaciones, desarrollada principalmente con Angular y NestJS.',
      imagenPortada: 'red-social/inicio.jpeg',
      tecnologias: ['Angular', 'TypeScript', 'Nest.js', 'MongoDB', 'HTML/CSS', 'Vercel', 'Tailwind CSS'],
      imagenes: ['red-social/Perfil.jpeg', 'red-social/Dashboard metricas.jpeg', 'red-social/Dashboard panel de usuarios.jpeg', 'red-social/Registro.jpeg', 
        'red-social/Login.jpeg', 'red-social/Modal publicacion.jpeg', 'red-social/Vista publicacion.jpeg'
      ],
      repoUrl: 'https://github.com/TobiasEscobar/Red-Social-InstaDev',
      demoUrl: 'https://red-social-insta-dev.vercel.app'
    },
    {
      titulo: 'Plataforma Sala de Juegos',
      descripcion: 'Plataforma que permite a los usuarios explorar y jugar una variedad de juegos en línea. Incluye autenticación y perfiles de usuario.',
      imagenPortada: 'sala-de-juegos/inicio 3.jpeg',
      tecnologias: ['Angular', 'TypeScript', 'PostgreSQL (Supabase)', 'Bootstrap 5', 'HTML/CSS', 'Vercel'],
      imagenes: ['sala-de-juegos/inicio 3.jpeg', 'sala-de-juegos/iniciar sesion.jpeg', 'sala-de-juegos/registro 2.jpeg', 'sala-de-juegos/juegopropio.jpeg', 
        'sala-de-juegos/preguntados.jpeg', 'sala-de-juegos/ranking.jpeg', 'sala-de-juegos/ranking 1024.jpeg'
      ],
      repoUrl: 'https://github.com/TobiasEscobar/Sala-de-Juegos',
      demoUrl: 'https://sala-de-juegos-pi.vercel.app'
    },
    {
      titulo: 'E-Commerce GameLabStore',
      descripcion: 'Plataforma de comercio electrónico. Catálogo de productos, dashboard de administración y carrito de compras.',
      imagenPortada: 'e-commerce/inicio (2).jpeg',
      tecnologias: ['JavaScript', 'Node.js', 'Express.js', 'EJS', 'MySQL', 'HTML/CSS', 'XAMPP'],
      imagenes: ['e-commerce/catalogo.jpeg', 'e-commerce/catalogo-oscuro.jpeg', 'e-commerce/carrito.jpeg', 'e-commerce/dashboard.jpeg', 
        'e-commerce/crear.jpeg', 'e-commerce/eliminar.jpeg', ],
      repoUrl: 'https://github.com/TobiasEscobar/Simulacion-De-e-commerce',
    },
    {
      titulo: 'Portfolio Personal',
      descripcion: 'Sitio web profesional para presentación de proyectos y currículum. Diseño responsivo y moderno.',
      imagenPortada: 'portfolio/inicio.jpeg',
      tecnologias: ['Angular', 'TypeScript', 'Bootstrap 5', 'HTML/CSS', 'SASS', 'Vercel'],
      repoUrl: 'https://github.com/TobiasEscobar/Mi-Portfolio',
    }
  ];

  public abrirModal(proyecto: any): void {
    this.imagenesSeleccionadas = proyecto.imagenes || []; 
    this.tituloProyectoSeleccionado = proyecto.titulo;

    const elementoModal = document.getElementById('modalGaleria');
    if (elementoModal) {
      const instanciaModal = new bootstrap.Modal(elementoModal);
      instanciaModal.show();
    }
  }

  public navegarA(url: string): void {
    window.open(url, '_blank');
  }
}
