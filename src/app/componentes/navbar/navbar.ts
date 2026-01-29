import { Component, OnInit, Inject, PLATFORM_ID, HostListener  } from '@angular/core';
import { ViewportScroller, isPlatformBrowser} from '@angular/common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar implements OnInit {

  esModoOscuro: boolean = false;
  activoCelular: boolean = false;

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

  @HostListener('window:resize')
  detectarDispositivo(): void {
    this.activoCelular = window.innerWidth < 992;
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

  public irASeccion(idSeccion: string): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const elemento = document.getElementById(idSeccion);
    if (!elemento) return;

    const esCelular = window.innerWidth < 992;

    if (esCelular) {
      this.activoCelular = true;
      const offcanvas = document.getElementById('menuLateral');

      if (offcanvas) {
        offcanvas.addEventListener(
          'hidden.bs.offcanvas',
          () => {
            elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
          },
          { once: true }
        );

        // cerrar offcanvas manualmente
        (window as any).bootstrap?.Offcanvas
          .getInstance(offcanvas)
          ?.hide();
      }
    } else {
      elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}