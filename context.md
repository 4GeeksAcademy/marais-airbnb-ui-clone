# Contexto del proyecto

## Objetivo
Clonar la experiencia de frontend de Airbnb usando **Next.js** y **Tailwind CSS**, con una interfaz adaptable a móvil y escritorio. El proyecto se enfoca en la presentación y navegación entre alojamientos; no presupone funcionalidades de backend o reservas reales.

## Vistas

### Inicio — `/`
Página de entrada que invita a explorar alojamientos. Presenta la marca, los controles de búsqueda y una selección de propiedades destacadas o populares.

**Referencia móvil:** [captura de Inicio](docs/screenshots/airbnb-inicio.png). Usar identidad visual propia; la captura sirve como referencia de composición, no como obligación de copiar la marca. Las decisiones para escritorio son propuestas adaptables.

**Componentes y layout**
- `Header`: marca ficticia propia, búsqueda y menú visual de usuario.
- `SearchBar`: recibe y mantiene el texto de búsqueda; filtra alojamientos visibles en cada pulsación.
- `CategoryNav`: fila horizontal de categorías con icono y etiqueta; mantiene la categoría seleccionada y resalta su selección.
- `StaySection`: recibe `title` y `stays`; representa alojamientos destacados mediante tarjetas.
- `ListingCard`: recibe un alojamiento, muestra placeholder fotográfico, título, precio por noche y estrellas; enlaza a `/rooms/[id]`.
- Layout: encabezado, búsqueda, fila de categorías y cuadrícula de alojamientos. Una columna a 375 px y varias desde el breakpoint de 768 px. Estado inicial vacío con indicador visible durante carga simulada.

### Catálogo — `/catalog`
Resultados de búsqueda en formato de catálogo. Permite revisar y comparar opciones, aplicar filtros y acceder a la ficha de un alojamiento.

**Referencia móvil:** [captura de Catálogo](docs/screenshots/airbnb-catalogo.png). Usar identidad visual propia; la captura informa la composición móvil. La cuadrícula de escritorio es una propuesta adaptable.

**Componentes y layout**
- `Header`: navegación y marca compartidas.
- `CatalogResults`: recibe el listado, muestra el número de resultados y ordena con estado local por precio ascendente o descendente.
- `ListingGrid`: recibe resultados ordenados y reutiliza `ListingCard` de Inicio; una columna en móvil y varias desde 768 px.
- `MapPanel`: placeholder gris rotulado «Mapa», sin integración interactiva.
- Layout: resultados primero y mapa debajo en móvil; desde 768 px, resultados a la izquierda y mapa a la derecha. No se agregan filtros, menú inferior ni mapa real.

### Detalle de habitación — `/rooms/[id]`
Ficha de un alojamiento seleccionado. Reúne información para que la persona evalúe si se ajusta a su viaje y pueda iniciar una reserva.

**Referencia móvil:** [captura de Detalle](docs/screenshots/airbnb-detalle.png). Usar identidad visual propia y tomar la captura como referencia de la composición móvil. Las decisiones de escritorio son propuestas.

**Componentes y layout**
- `RoomGallery`: recibe un arreglo de placeholders, mantiene el índice activo y ofrece botones «Anterior» y «Siguiente».
- `RoomOverview`: recibe la habitación y muestra título, estrellas, cantidad de reseñas y ubicación; sigue inmediatamente a la galería.
- `HostInfo`: fila con avatar placeholder, nombre y años como anfitrión.
- `AmenitiesList`: cuadrícula de servicios con icono y etiqueta.
- `BookingCard`: precio por noche, contador de huéspedes con mínimo y máximo, y CTA visual/simulado sin transacción ni selector de fechas funcional.
- Layout: galería superior, resumen, anfitrión, servicios y tarjeta de reserva. La carga de habitación se simula por id; el id inexistente muestra estado vacío/no encontrado.

El alcance base de esta vista comprende únicamente esas cinco secciones; no se implementan descripción adicional, ubicación detallada, calendario ni opiniones.

## Usuario objetivo
Personas que planean viajes y buscan alojamientos temporales según su destino, fechas, presupuesto y preferencias. Su meta es **descubrir opciones, compararlas rápidamente y consultar el detalle de una propiedad para decidir si reservarla**.

## Criterios técnicos y alcance

- Next.js 16 con App Router y TypeScript.
- Estructura: /app para rutas, /components para componentes reutilizables
	y /types para interfaces y tipos compartidos.
- Diseño mobile-first: comenzar en 375 px y adaptar desde 768 px.
- Estilos exclusivamente con Tailwind CSS, sin librerías de UI.
- Componentes funcionales declarados con const, con una sola
	responsabilidad y de aproximadamente 80 líneas como máximo.
- Reutilizar `ListingCard` entre Inicio y Catálogo.
- Usar `useState` para búsqueda en tiempo real, selección de categoría,
	orden de Catálogo, índice de galería y contador de huéspedes.
- Usar `useEffect` y `setTimeout` para simular carga en Inicio y Detalle,
	mostrar estados de carga y limpiar temporizadores al desmontar.
- Usar Link de Next.js para navegar entre /, /catalog y /rooms/[id].
- Trabajar con datos simulados, sin backend, autenticación,
  mapas interactivos, pagos ni reservas reales.
- Menú de usuario, placeholders fotográficos, mapa y CTA de reserva son visuales.
- Las capturas móviles están enlazadas en cada vista y sus rutas se comprobaron en `docs/screenshots/`. No fue posible inspeccionar visualmente su contenido en esta sesión; la especificación sigue la consigna oficial y las referencias previas de arquitectura. La distribución desde 768 px es una propuesta adaptable.
