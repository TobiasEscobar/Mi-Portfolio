import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ViewportScroller, isPlatformBrowser} from '@angular/common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar implements OnInit {

  esModoOscuro: boolean = false;

  constructor(
    private desplazadorVista: ViewportScroller,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    // Verificar si hay preferencia guardada (solo en navegador)
    if (isPlatformBrowser(this.platformId)) {
      const temaGuardado = localStorage.getItem('theme');
      if (temaGuardado === 'dark') {
        this.activarModoOscuro();
      }
    }
  }

  cambiarTema(): void {
    this.esModoOscuro = !this.esModoOscuro;
    
    if (this.esModoOscuro) {
      this.activarModoOscuro();
      localStorage.setItem('theme', 'dark');
    } else {
      this.activarModoClaro();
      localStorage.setItem('theme', 'light');
    }
  }

  private activarModoOscuro(): void {
    this.esModoOscuro = true;
    document.body.classList.add('dark-mode');
  }

  private activarModoClaro(): void {
    this.esModoOscuro = false;
    document.body.classList.remove('dark-mode');
  }

  // Función en español para navegar
  public irASeccion(idSeccion: string): void {
    this.desplazadorVista.scrollToAnchor(idSeccion);
  }
}