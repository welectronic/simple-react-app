# Simple React Calculator

## Descripción del Proyecto

El proyecto consiste en desarrollar una calculadora web utilizando HTML, CSS y JavaScript, implementada con React. La calculadora es un clon de la calculadora de iOS, replicando tanto su diseño como su funcionalidad básica.

### Características Principales

- Realiza operaciones aritméticas básicas: suma, resta, multiplicación y división.
- Interfaz de usuario similar a la calculadora de iOS.
- Implementada utilizando React para la gestión del estado y la renderización de componentes.

## Estructura del Proyecto

El proyecto está organizado en los siguientes directorios y archivos:

- **src**: Contiene el código fuente de la aplicación.
  - **components**: Contiene los componentes de la calculadora.
    - **button**: Componente para los botones de la calculadora.
    - **buttonpanel**: Componente que agrupa todos los botones.
    - **display**: Componente para la pantalla de la calculadora.
  - **logic**: Contiene la lógica de las operaciones de la calculadora.
    - **Addition**: Clase para la operación de suma.
    - **Subtraction**: Clase para la operación de resta.
    - **Multiplication**: Clase para la operación de multiplicación.
    - **Division**: Clase para la operación de división.
    - **Operation**: Clase abstracta para las operaciones.
    - **Calculator**: Clase principal que maneja la lógica de la calculadora.
  - **App.js**: Componente principal de la aplicación.
  - **App.css**: Estilos para el componente principal de la aplicación.
  - **index.js**: Punto de entrada de la aplicación.
  - **index.css**: Estilos globales de la aplicación.

## Instalación y Ejecución

Sigue estos pasos para clonar el repositorio, instalar las dependencias y ejecutar la aplicación en tu entorno local:

### Clonar el Repositorio

```sh
git clone <URL_DEL_REPOSITORIO>
cd simple-react-app
```

### Instalar Dependencias

Asegúrate de tener `npm` instalado. Luego, ejecuta:

```sh
npm install
```

### Ejecutar la Aplicación

Para iniciar la aplicación en modo de desarrollo, ejecuta:

```sh
npm start
```

Esto abrirá la aplicación en tu navegador por defecto en `http://localhost:3000`.

### Ejecutar Pruebas

Para ejecutar las pruebas, usa el siguiente comando:

```sh
npm test
```

Esto ejecutará las pruebas utilizando Jest y mostrará los resultados en la consola.

### Generar Informe de Cobertura de Pruebas

Para generar un informe de cobertura de pruebas, ejecuta:

```sh
npm test -- --coverage
```

Esto generará un informe detallado en la carpeta `coverage`.

## Contribuir

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Sube tus cambios a tu fork (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).
