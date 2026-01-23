import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  imports: [],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.scss',
})
export class SobreMi {

  constructor(private desplazadorVista: ViewportScroller,) {}

  public irASeccion(idSeccion: string): void {
    this.desplazadorVista.scrollToAnchor(idSeccion);
  }
}
