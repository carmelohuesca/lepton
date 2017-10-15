# Módulo leptonModule 

Partícula elemental de TEST para el Trabajo con Microservicios

## Tecnologías

[Generator-Particle] usa los siguientes proyectos open source:

* [Yeoman]: Generador de estructuras 
* [node.js]: Sistema I/O para backend
* [Karma]: Sistema de Test
* [Webpack]: Empaquetado del componente

## Instalación

Requiere [node.js] v6+. 

Comprobar la versión:

    $ npm --version

### Instalación de las dependencias:

    $ npm install

### Instalación de los typings

    $ typings install

### Instalación del componente en otro proyecto:    
  
    $ npm install --save leptonModule

## Vincular a Git

Para iniciar el repositorio local

    git init

## Test

Lanzar los test:

    $ npm run test

## Ejecución
    
    $ npm run start

## Distribución

Preparar el componente para distribuir:
    
    $ npm run build

## Documentación

Para la documentación, lanzar:

    $ npm run tsdoc

Y se tendrá disponible en el enlace de [Documentación]


## Publicación

Para publicar el componente, hay que asegurarse de que se modifica la versión:

    <!-- package.json -->
    version: x.x.x
    X.x.x [MAJOR] Incrementos de tecnología y compatibilidad descendente
    x.X.x [MINOR] Incrementos de Funcionalidades
    x.x.X [PATCH] Incrementos evolutivos y correctivos que no añaden funcionalidad

Y se incluyen los archivos en el package.json

Y después ejecutar:

    $ npm publish

##Licencia

[LICENSE.md]

----

[//]: # (These are reference links used in the body)
   [Documentación]: </docs/index.html>
   [Generator-Particle]:<#>
   [Yeoman]: <http://yeoman.io>
   [Webpack]: <https://webpack.github.io/>
   [Node.js]: <http://nodejs.org>
   [Karma]: <https://karma-runner.github.io>
   [LICENSE.md]:</LICENSE.md>