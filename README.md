# Cafe_Mate

Este proyecto es una aplicación web desarrollada con Angular, creada como parte del Trabajo Práctico Final del "Seminario Angular 2025". Simula una tienda de café en línea donde los usuarios pueden explorar diferentes variedades de café y agregarlas a un carrito de compras.

## Características

- **Listado de Cafés:** Visualiza una variedad de cafés con detalles como origen, tipo, precio, tamaño, stock e imagen.
- **Carrito de Compras:** Permite a los usuarios agregar cafés al carrito, mostrando la cantidad seleccionada de cada producto.
- **Gestión de Stock:** El stock de los productos se actualiza al ser añadidos al carrito.
- **Navegación:** La aplicación cuenta con ruteo para diferentes secciones como "Home" (listado de cafés), "Sobre Nosotros" y "Contacto".
- **Componentes Reutilizables:** Utiliza componentes independientes como `InputNumberComponent` para la selección de cantidad.
- **Comunicación entre Componentes:** Implementa comunicación a través de servicios compartidos (`CafeCartService`) y `@Input/@Output` para la interacción entre componentes.
- **Control de Flujo:** Hace uso de directivas como `*ngFor` y `*ngIf`, así como el nuevo `@for` para la renderización condicional y repetitiva de elementos en el DOM.
- **Tipado con Interfaces:** Los datos de los cafés están tipados mediante una interfaz (`Cafe`) para una mejor gestión y claridad del código.
- **Server-Side Rendering (SSR):** Configurado para el prerenderizado de rutas en el servidor.

## Tecnologías Utilizadas

- Angular
- TypeScript
- HTML
- CSS (con Bootstrap para la barra de navegación)

## Ejecución del Proyecto

1.  Clona el repositorio:
    `git clone https://github.com/jltobal/TP_Angular_2025.git`
2.  Navega al directorio del proyecto:
    `cd TP_Angular_2025`
3.  Instala las dependencias:
    `npm install`
4.  Inicia la aplicación:
    `ng serve`
5.  Abre tu navegador y visita `http://localhost:4200`

## Enlace a StackBlitz

Puedes explorar y editar el proyecto directamente en StackBlitz a través del siguiente enlace:
[Enlace a StackBlitz aquí] (Por favor, reemplaza este texto con el enlace real de StackBlitz)
