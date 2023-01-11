import { Component } from '@angular/core';

import { Feature } from "./Feature";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  features: Feature[]

  constructor(){
    this.features = [
      {
        title: 'Seguimientos completos', 
        description: 'En Travel Tracer puedes guardar la línea, ramal, paradas y horarios de inicio y destino de cada viaje',
        imageUrl: "https://www.laplata1.com/adjuntos/800/095122_talp-dfdfdf.webp",
        imageLeft: true,
        buttonText: "Leer más",
        gradientClass: "gradient-yellow"
      }, {
        title: 'Líneas customizables',
        description: 'Puedes agregar y modificar todas las líneas que quieras, especificando colores y apodos. Obtendrás estadísticas de cada una',
        imageUrl: "https://px.cdn.lanueva.com/072022/1657300921023/WhatsApp%20Image%202022-07-08%20at%2012.59.49%20PM.jpeg?cw=807",
        imageLeft: false,
        buttonText: "Ver ahora",
        gradientClass: "gradient-green"
      }, {
        title: '¡También hay trenes!',
        description: 'Información detallada de cada ramal y sus combinaciones',
        imageUrl: "https://fotos.perfil.com/2020/12/10/trim/1280/720/tren-roca-20201210-1098219.jpg",
        imageLeft: true,
        buttonText: 'Consultar ahora',
        gradientClass: "gradient-blue"
      }
    ]
  }
}
