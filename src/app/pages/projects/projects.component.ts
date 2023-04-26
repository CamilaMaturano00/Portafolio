import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  listProjects: any [] = [
    {
      name:'E-commerce',
      src: 'E-commerce.png',
      demo: 'https://camilamaturano00.github.io/E-commerceAlura/',
      github: 'https://github.com/CamilaMaturano00/E-commerceAlura'
    },
    {
      name:'Open Sport',
      src: 'openSport.png',
      demo: 'https://camilamaturano00.github.io/OpenSportsClone/',
      github: 'https://github.com/CamilaMaturano00/OpenSportsClone'
    },
    {
      name:'Ahorcado',
      src:'juegoAhorcdo.png',
      demo: 'https://camilamaturano00.github.io/JuegoDelAhorcado.github.io/',
      github: 'https://github.com/CamilaMaturano00/JuegoDelAhorcado.github.io'
    },
    {
      name:'Store Alura',
      src:'aluraStore.png',
      demo: 'https://camilamaturano00.github.io/Alura-Store/',
      github: 'https://github.com/CamilaMaturano00/Alura-Store'
    },
    {
      name:'Unidad productiva',
      src:'unidadProductiva.png',
      demo: 'https://unidadproductiva-c91be.web.app/',
      github: 'https://github.com/CamilaMaturano00/TodoCasero'
    },    
    {
      name:'Encriptador',
      src:'encriptador.png',
      demo: 'https://camilamaturano00.github.io/',
      github: 'https://github.com/CamilaMaturano00/CamilaMaturano00.github.io'
    },

  ]

  constructor() { }

  ngOnInit() {
  }

}
