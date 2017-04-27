import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class DatosService {

  constructor(public http: Http) {
  }


  traerDatos() {
    //Url extaida desde   https://restcountries.eu/#api-endpoints-all
    let url = 'https://restcountries.eu/rest/v2/all';

    //then y catch se ejecuta asinconicamente
    return this.http.get('https://restcountries.eu/rest/v2/all')
      .toPromise()
      .then(this.exctractData)
      .catch(this.error);
  }

  //Metodos que actuan de callbacks
  private exctractData(Res: Response) {
    return Res.json() || {};  //Al agregar los 'pipes' se puede devolver en caso de no tener datos, un objeto vacio.
  }
  private error(error: Response) {
    return error;
  }
}
