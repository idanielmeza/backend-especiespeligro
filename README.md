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

### Pruebas Unitarias
Se realizaron pruebas unitarias, implementadas mediante Jest, al módulo de helpers, como el método de subir archivo, así como a los controladores, es decir, los métodos de la clase especie, estado, habitad, tipo y uploads.

<img width="356" alt="Screen Shot 2022-05-15 at 8 23 16" src="https://user-images.githubusercontent.com/54159730/168480529-6ee7ea50-8d28-41f8-98d0-7e47fc924fac.png">

Para instalar las dependencias con el repositorio solo corre el comando:
>npm install
 