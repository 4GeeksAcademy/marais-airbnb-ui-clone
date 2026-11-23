# Contexto del proyecto

## Objetivo
Clonar la experiencia de frontend de Airbnb usando **Next.js** y **Tailwind CSS**, con una interfaz adaptable a móvil y escritorio. El proyecto se enfoca en la presentación y navegación entre alojamientos; no presupone funcionalidades de backend o reservas reales.

## Vistas

### Inicio — `/`
Página de entrada que invita a explorar alojamientos. Presenta la marca, los controles de búsqueda y una selección de propiedades destacadas o populares.

**Componentes principales**
- `Header`: marca, navegación y acceso a la cuenta.
- `SearchBar`: destino, fechas, huéspedes y acción de búsqueda.
- `CategoryNav`: categorías o filtros visuales de alojamientos.
- `ListingGrid` / `ListingCard`: alojamientos destacados con imagen, ubicación, precio y valoración.

### Catálogo — `/catalog`
Resultados de búsqueda en formato de catálogo. Permite revisar y comparar opciones, aplicar filtros y acceder a la ficha de un alojamiento.

**Componentes principales**
- `Header` y `SearchBar`: navegación y criterios de búsqueda visibles.
- `FilterBar`: filtros relevantes, como precio, tipo de alojamiento y servicios.
- `ListingGrid` / `ListingCard`: resultados con imagen, datos esenciales y acceso al detalle.
- `MapPanel`: espacio visual de mapa para contextualizar la ubicación de los resultados, sin integración real.

### Detalle de habitación — `/rooms/[id]`
Ficha de un alojamiento seleccionado. Reúne información para que la persona evalúe si se ajusta a su viaje y pueda iniciar una reserva.

**Componentes principales**
- `Header`: navegación global.
- `RoomGallery`: imágenes del alojamiento.
- `RoomOverview`: título, ubicación, valoración y datos principales.
- `HostInfo` y `AmenitiesList`: información del anfitrión y servicios incluidos.
- `AvailabilityCalendar`: fechas disponibles (representación de interfaz).
- `BookingCard`: precio, selección de fechas y huéspedes, y llamada a la acción.
- `ReviewsSection` y `LocationSection`: opiniones y ubicación del alojamiento.

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
- Reutilizar componentes entre vistas y mantener sus nombres consistentes.
- Usar useState para búsqueda en tiempo real, filtros, orden por precio
	ascendente y descendente, control de galería y contador de huéspedes.
- Usar useEffect y setTimeout para simular la carga asíncrona de datos,
	mostrar estados de carga y limpiar los temporizadores al desmontar.
- Usar Link de Next.js para navegar entre /, /catalog y /rooms/[id].
- Trabajar con datos simulados, sin backend, autenticación,
	mapas interactivos, pagos ni reservas reales.
- El calendario, las opiniones y el acceso a cuenta tendrán alcance visual.
- Las especificaciones de componentes, props y layout se completarán
	después de analizar las capturas de cada vista.
