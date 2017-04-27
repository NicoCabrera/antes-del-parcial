import { Component, OnInit } from '@angular/core';
import { DatosService } from './services/datos.service';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  source: LocalDataSource;
  settings = {
    columns: {
      name: {
        title: 'Nombre',
      },
      alpha2Code:{
        title:"Codigo",
      },
    }
  };
  constructor(private datos: DatosService) {
    this.source = new LocalDataSource();
  }

  ngOnInit() {
    this.datos.traerDatos()
      .then(data => {
        this.source.load(data)
      })
      .catch(error => console.log(error));
  }
}
