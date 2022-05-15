# HACK THE OCEAN - LAUNCHX
## Un proyecto de INNOVACCION VIRTUAL

Hack the Ocean es un hackathon con la iniciativa de implementar tecnologias de Frontend y Backend para explorar distintas problematicas, pensar en soluciones e implementarlas de manera que los conocimientos adquiridos por los Explorers tengan un aterrizaje al terreno practico y exploren nuevas soluciones a partir de su creatividad, conocimiento y objetivos a travez del trabajo en equipo.

## Woopas al Rescate 
Este proyecto apunta a crear consciencia de las distintas especies con a las que habitamos en el planeta, la situacion enla que se encuentran debido al cambio climatico, afectacion de su habitad, perdida de sus fuentes de alimento y la constante expansion del territorio humano.
Puedes vizualizar el proyecto aqui [Wooper al rescate](https://hacktheocean.azurewebsites.net/)

### Tecnologías utilizadas en este proyecto

**Node.js**

Node.js es un entorno de tiempo de ejecución de JavaScript de código abierto, multiplataforma y back-end que se ejecuta en el motor V8 y ejecuta código JavaScript fuera de un navegador web. Permita que los desarrolladores usen JavaScript para escribir herramientas de línea de comandos y para secuencias de comandos del lado del servidor, ejecutando scripts del lado del servidor para producir contenido dinámico de la página web antes de que la página se envíe al navegador web del usuario.

**MongoDB**

En lugar de guardar los datos en tablas, tal y como se hace en las bases de datos relacionales, MongoDB guarda estructuras de datos BSON (una especificación similar a JSON) con un esquema dinámico, haciendo que la integración de los datos en ciertas aplicaciones sea más fácil y rápida.

**ExpressJs**

Express es un marco de aplicación web Node.js mínimo y flexible que proporciona un sólido conjunto de características para aplicaciones web y móviles.

**ESLint**

Herramienta de código abierto enfocada en el proceso de "lintig" para JavaScript, siendo la más predominante para la tarea de "limpiar" código JavaScript tanto en el servidor (NodeJS) como en el navegador.

### Modelado de la API

```mermaid
classDiagram 
    class Especie
      Especie <|-- Estado  
      Especie <|-- Habitad  
      Especie <|-- Tipo
      Especie : +String nombre
      Especie : +String descripcion
      Especie : +String img
      Especie : +String descripcion
      Especie : +Int problematica
      Especie : +Schema Tipo
      Especie : +Schema Estado
      Especie : +Schema Habitad
        class Estado {
            +String Estado
        }
        class Habitad {
            +String Habitad
        }
        class Tipo {
            +String Tipo
        }
```
### Un form padrísimo!

```mermaid
classDiagram
    class Reporte
    Reporte : +String Titulo
    Reporte : +String Decripcion
    Reporte : +Date Fecha
    Reporte : +String Email
    Reporte : +String Ubicacion
    Reporte : +String Estado
    Reporte : +Boolean Finalizado
    Reporte : +Enviar Reporte()
```

### Endpoints
#### Reportes
**https://hacktheoceanback.azurewebsites.net/api/reportes/ (método GET).** Regresa todos los reportes en la base de datos.
**https://hacktheoceanback.azurewebsites.net/api/reportes/:id (método GET).** Regresa el reporte según el id indicado en el parámetro.
**https://hacktheoceanback.azurewebsites.net/api/reportes/ (método POST).** Agrega un reporte a la base de datos.
**https://hacktheoceanback.azurewebsites.net/api/reportes/ (método PUT).** Actualiza un reporte en la base de datos.
| GET reportes | GET reportes/:id |
| --- | --- |
|  <img width="686" alt="Screen Shot 2022-05-15 at 10 15 14" src="https://user-images.githubusercontent.com/54159730/168485716-0ea84e7e-6ca8-44e6-a1f3-3e6e21c2deb9.png"> | <img width="686" alt="Screen Shot 2022-05-15 at 10 15 51" src="https://user-images.githubusercontent.com/54159730/168485727-264787f0-abc7-471d-a0e1-f03ae4b56fa0.png"> |

#### Tipos
**https://hacktheoceanback.azurewebsites.net/api/tipos/ (método GET).** Regresa todos los tipos de especies en la base de datos.
**https://hacktheoceanback.azurewebsites.net/api/tipos/:id (método GET).** Regresa el tipo de especie según el id indicado en el parámetro.

**https://hacktheoceanback.azurewebsites.net/api/tipos/ (método POST).** Agrega un tipo de especie a la base de datos.
**https://hacktheoceanback.azurewebsites.net/api/tipos/ (método PUT).** Actualiza un tipo de especie en la base de datos.
| GET tipos | GET tipos/:id |
| --- | --- |
|  <img width="686" alt="Screen Shot 2022-05-15 at 10 26 06" src="https://user-images.githubusercontent.com/54159730/168485883-be2e7e7f-c13f-40f6-bf52-f747a6a46887.png"> | <img width="686" alt="Screen Shot 2022-05-15 at 10 26 27" src="https://user-images.githubusercontent.com/54159730/168485885-366e569c-09d5-4050-9b54-2e8c16c28dc5.png"> |

#### Habitad
**https://hacktheoceanback.azurewebsites.net/api/habitad/ (método GET).** Regresa todos las habitats en la base de datos.
**https://hacktheoceanback.azurewebsites.net/api/habitad/:id (método GET).** Regresa el habitat según el id indicado en el parámetro.

**https://hacktheoceanback.azurewebsites.net/api/habitad/ (método POST).** Agrega un habitat a la base de datos.
**https://hacktheoceanback.azurewebsites.net/api/habitad/ (método PUT).** Actualiza un habitat en la base de datos.
| GET tipos | GET tipos/:id |
| --- | --- |
|  <img width="686" alt="Screen Shot 2022-05-15 at 10 29 30" src="https://user-images.githubusercontent.com/54159730/168486081-59154f10-2622-4834-a3ca-f429db967fb4.png"> | <img width="686" alt="Screen Shot 2022-05-15 at 10 26 27" src="https://user-images.githubusercontent.com/54159730/168485885-366e569c-09d5-4050-9b54-2e8c16c28dc5.png"> |


### Pruebas Unitarias
Se realizaron pruebas unitarias, implementadas mediante Jest, al módulo de helpers, como el método de subir archivo, así como a los controladores, es decir, los métodos de la clase especie, estado, habitad, tipo y uploads.

<img width="356" alt="Screen Shot 2022-05-15 at 8 23 16" src="https://user-images.githubusercontent.com/54159730/168480529-6ee7ea50-8d28-41f8-98d0-7e47fc924fac.png">

### GitHub Actions & Azure
![github actions](https://static.gunnarpeipman.com/wp-content/uploads/2020/05/azure-static-web-app.png)


Para instalar las dependencias con el repositorio solo corre el comando:
>npm install
 
