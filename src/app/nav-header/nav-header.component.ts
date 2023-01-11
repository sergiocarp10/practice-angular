import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent {
  tabs: {displayName: string; url: string}[]

  constructor(){
    this.tabs = [
      {displayName: 'Historial', url: '/history'},
      {displayName: 'Resumen', url: '/month_summary'},
      {displayName: 'Líneas', url: "/lines"}
    ]
  }
}
