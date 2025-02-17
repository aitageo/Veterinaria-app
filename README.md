# Apv

# VeterinariaApp - Frontend

## Descripción

VeterinariaApp es una aplicación web diseñada para la gestión de citas y registros de pacientes (mascotas) en una clínica veterinaria. Este es el frontend de la aplicación, desarrollado en **Angular**, que permite a los usuarios (clientes y veterinarios) interactuar con la plataforma de manera sencilla y eficiente.

## Características

- **Interfaz de Usuario (UI)**: Interfaz amigable para la gestión de citas, registros de mascotas y visualización de historial médico.
- **Autenticación**: Los clientes y veterinarios pueden iniciar sesión para acceder a sus respectivas funciones mediante tokens JWT.
- **Gestión de Citas**: Los clientes pueden programar, cancelar y ver sus citas programadas.
- **Registro de Mascotas**: Los clientes pueden agregar y actualizar la información de sus mascotas.
- **Historial Médico**: Visualización del historial médico de las mascotas, con diagnósticos y tratamientos registrados por los veterinarios.
- **Responsivo**: La aplicación está optimizada para verse bien en dispositivos móviles y de escritorio.

## Tecnologías Utilizadas

- **Frontend**: Angular
- **HTML** y **CSS** para la estructura y estilo de la interfaz
- **Bootstrap** o **Angular Material** (si usas alguno de estos para componentes UI)
- **Autenticación**: JWT (JSON Web Tokens) para manejo de sesiones
- **Comunicación con Backend**: HTTPClient de Angular para consumir la API RESTful del backend (Node.js/Express/MongoDB)

## Instalación

### Requisitos

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

### Pasos para ejecutar el proyecto

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/VeterinariaApp-frontend.git
   cd VeterinariaApp-frontend


This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
