# Antes de empezar, un recordatorio:
Las maquinas de la facultad (al dia de hoy 27/04/2017) tiene el angular cli desactualizado.
Siempre al llegar, ejecutar en la consola:
- npm uninstall -g angular/cli
- npm cache clean
- npm install -g angular/cli@latest

Es importante saber que primero hay que ejecutar estos comandos, y después crear el proyecto.
El error más común (He visto desertar a alumnos por atrasarse en las clases por esta PAVADA) es generar primero el proyecto, y al querer ejecutarlo les salta el error, actualizan el cli, pero siguen tratando de lanzar el proyecto generado con el anterior CLI.
No lo hagas.
Es malo.
No sigas intentando.
***
# Ejemplo de servicio
Usamos https://restcountries.eu/ desde donde nos traemos on json con datos para probar las peticiones que se realizan por el protocolo http.
Usamos el servicio Http de Angular 2.
Creamos un servicio con el comando 'ng generate service' seguido de la ruta './services/datos'.

# Consumir el servicio
Para proveernos de un servicio, hay que importarlo e incluirlo en 'providers' (archivo del modulo ppal).
Luego lo incluimos en el/los componentes que lo van a consumir con el import.

import { DatosService } from './services/datos.service';

entonces podemos inyectarlo. Pasandolo como un parámetro al constructor de la clase.


Empezamos a crear métodos dentro de nuestro servicio para poder consumir de nuestro servicio.

traerDatos(){
    //...
} 

Ahora importamos algunos modulos de Angular2 en el servicio creado anteriormente.
```sh
ARCHIVO ./services/datos.service
```
import { Http, Response } from '@angular/http';


Para poder trabajar con los operadores de la libreria RxJS sobre los Observables que nos
sirve el Http importamos

```sh
import 'rxjs/add/operator/toPromise';
```

(Promesas: tienen dos métodos. then y catch. son los callback)

Clase del componente ng2-samrt-table
LocalDataSource

# IMPORTANTE!!!! Temas para el primer parcial
 Durante el examen vamos a tomar datos de dos páginas:
 - http://mockaroo.com/
 - http://www.mocky.io/

 Uno crea wl json.
 Otro crea una direccion temporal para leer datos.
 Testearlos.

 Crear un services, tomar esos datos.
 Usar ngIF, ngFor, ngStyle.
 Por cada ngFor vamos a tener distitas propiedades.
 Cargar una imagen con [src]

 traer los datos por get.
 Hacer un insert por get tambien.(no llegamos a ver el post)
 user el smart-table, configurarlo, sus eventos.
 Manejar eventos con ().

 En caso de ir a recuperatorio va a ser un ABM utilizando todos lo verbos que provee http de angular 2.