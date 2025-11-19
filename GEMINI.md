# Guía de Componentes (Snippets) para Gemini

Para asegurar que pueda interpretar y usar estos componentes correctamente, usaremos un sistema de placeholders (variables) con el formato `{{nombre_variable}}`.

---

# Título Principal

## Descripción
Este componente se usa para el título principal de una sección o tema.

## Placeholders
- `{{numero_tema}}`: El número del tema o sección (ej. "1", "2", etc.).
- `{{titulo_tema}}`: El texto del título principal.

## Snippet
```pug
.container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span {{numero_tema}}
      h1 {{titulo_tema}}
```

---

# Slyder Genérico

## Descripción
Un slider de tipo A o B para presentar contenido con imágenes.

## Placeholders
- `{{tipo_slyder}}`: Define el tipo de slider. Puede ser "a" o "b".
- `{{elementos_slider}}`: Aquí se insertará el contenido de cada slide.

## Snippet Base
```pug
.tarjeta.tarjeta--azul.p-4.pt-3.tarjeta-slyder-tipo-a-b(data-aos="fade-right")
  SlyderA(tipo="{{tipo_slyder}}")
    //- Aquí se insertan los elementos del slider usando la plantilla de abajo
    {{elementos_slider}}
```

---

# Fila Genérica

## Descripción
Este componente se usa para crear una fila con contenido centrado horizontal y verticalmente.

## Placeholders
- `{{contenido_fila}}`: El contenido que se insertará dentro de la fila.

## Snippet
```pug
.row.justify-content-center.align-items-center
  p.mb-4 {{contenido_fila}}
```

---

---

# Subtítulo Simple

## Descripción
Este componente se usa para un subtítulo simple con un efecto de animación.

## Placeholders
- `{{texto_subtitulo}}`: El texto completo del subtítulo (ej. "1.1 Texto subtitulo").

## Snippet
```pug
.titulo-segundo.color-acento-contenido(data-aos="fade-right")
  h2 {{texto_subtitulo}}
```

---

# Contenido con Imagen (Texto Izquierda, Imagen Derecha)

## Descripción
Este componente muestra texto en una columna a la izquierda y una imagen en una columna a la derecha, con alineación centrada y un margen inferior.

## Placeholders
- `{{texto_columna_izquierda}}`: El contenido de texto para la columna izquierda.
- `{{ruta_imagen}}`: La ruta a la imagen (ej. `@/assets/curso/temas/tema1/imagen.svg`).
- `{{alt_imagen}}`: El texto alternativo para la imagen.

## Snippet
```pug
.row.justify-content-center.align-items-center.mb-2(data-aos="fade-left")
  .col-md-8.mb-4.mb-md-0.my-2
    {{texto_columna_izquierda}}
  .col-md-4
    figure
      img(src='{{ruta_imagen}}', alt='{{alt_imagen}}')
```

---

# Infografía con Puntos Calientes

## Descripción
Este componente muestra una imagen infográfica con puntos interactivos (hotspots) que revelan información al pasar el mouse sobre ellos.

## Snippet Base
```pug
ImagenInfografica.color-primario
  template(v-slot:imagen)
    figure
      img(src='{{ruta_imagen_infografia}}', alt='{{alt_imagen_infografia}}')
  //- Aquí se insertan los puntos calientes usando la plantilla de abajo
  {{puntos_calientes}}
```

## Plantilla para Punto Caliente (Contenido de `{{puntos_calientes}}`)

### Descripción
Esta es la estructura para un único punto caliente dentro de la infografía. Puedes repetir este bloque para cada punto que necesites.

### Placeholders
- `{{posicion_x}}`: La coordenada X del punto en porcentaje (ej. "61%").
- `{{posicion_y}}`: La coordenada Y del punto en porcentaje (ej. "2.5%").
- `{{numero_hotspot}}`: El número que se muestra en el punto.
- `{{texto_hotspot}}`: El texto que se revela en el punto.

### Snippet de Punto Caliente
```pug
.tarjeta.color-acento-botones.p-3(x="{{posicion_x}}" y="{{posicion_y}}" numero="{{numero_hotspot}}")
  .h5.mb-1.text-center {{texto_hotspot}}
```

---

# Contenido con Imagen (Texto Derecha, Imagen Izquierda)

## Descripción
Este componente muestra una imagen en una columna a la izquierda y texto en una columna a la derecha, con alineación centrada y un margen inferior.

## Placeholders
- `{{ruta_imagen}}`: La ruta a la imagen (ej. `@/assets/curso/temas/tema1/imagen.svg`).
- `{{alt_imagen}}`: El texto alternativo para la imagen.
- `{{texto_columna_derecha}}`: El contenido de texto para la columna derecha.

## Snippet
```pug
.row.justify-content-center.align-items-center.mb-2(data-aos="fade-right")
  .col-md-4
    figure
      img(src='{{ruta_imagen}}', alt='{{alt_imagen}}')
  .col-md-8.mb-4.mb-md-0.my-2
    {{texto_columna_derecha}}
```

---

# Pestañas Verticales

## Descripción
Este componente muestra pestañas verticales a la izquierda y el contenido asociado (tarjeta con texto e imagen) a la derecha.

## Snippet Base
```pug
TabsA.color-acento-contenido.col-lg-12.justify-content-center(data-aos="flip-up")
  //- Aquí se insertan los elementos de las pestañas usando la plantilla de abajo
  {{elementos_pestañas}}
```

## Plantilla para Elemento de Pestaña (Contenido de `{{elementos_pestañas}}`)

### Descripción
Esta es la estructura para un único elemento (pestaña) dentro de las `Pestañas Verticales`. Puedes repetir este bloque para cada pestaña que necesites.

### Placeholders
- `{{titulo_pestaña}}`: El título de la pestaña.
- `{{ruta_imagen_pestaña}}`: La ruta a la imagen dentro de la tarjeta de contenido de la pestaña.
- `{{alt_imagen_pestaña}}`: El texto alternativo para la imagen de la pestaña.
- `{{titulo_tarjeta_pestaña}}`: El título dentro de la tarjeta de contenido de la pestaña.
- `{{texto_tarjeta_pestaña}}`: El texto dentro de la tarjeta de contenido de la pestaña.

### Snippet de Elemento de Pestaña
```pug
.tarjeta.p-4(titulo="{{titulo_pestaña}}")
  .row
    .col-xl-2.mb-4
      figure
        img(src='{{ruta_imagen_pestaña}}', alt='{{alt_imagen_pestaña}}')
          
    .col-xl-10
      h3.letra-acordeon-titulos {{titulo_tarjeta_pestaña}}
      p.letra-acordeon-titulos {{texto_tarjeta_pestaña}}
```

---

# Acordeón Tipo A

## Descripción
Este componente muestra un acordeón de tipo A con secciones expandibles y colapsables, cada una con un título y contenido.

## Snippet Base
```pug
.bg--img_03(data-aos="fade-right")
  .row.justify-content-center
    .col-lg-12.mb-4.mb-md-0
      AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")
        //- Aquí se insertan los elementos del acordeón usando la plantilla de abajo
        {{elementos_acordeon}}
```

## Plantilla para Elemento de Acordeón (Contenido de `{{elementos_acordeon}}`)

### Descripción
Esta es la estructura para un único elemento (sección) dentro del `Acordeón Tipo A`. Puedes repetir este bloque para cada sección que necesites.

### Placeholders
- `{{titulo_acordeon}}`: El título de la sección del acordeón.
- `{{texto_acordeon}}`: El texto principal dentro de la sección del acordeón.
- `{{ruta_imagen_acordeon}}`: La ruta a la imagen dentro de la sección del acordeón.
- `{{alt_imagen_acordeon}}`: El texto alternativo para la imagen del acordeón.

### Snippet de Elemento de Acordeón
```pug
.row.justify-content-center.align-items-center(titulo="{{titulo_acordeon}}")
  .col-1
  .col-7
    p.letra-acordeon-mas-menos {{texto_acordeon}}
  .col-md-4
    figure
      img(src='{{ruta_imagen_acordeon}}', alt='{{alt_imagen_acordeon}}')
```
