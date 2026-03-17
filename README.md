# Dossier Académico — GitHub Pages

Sitio web minimalista para dossier académico. Diseñado para ser fácil de actualizar: toda la información está separada en archivos de datos.

## Estructura del proyecto

```
dossier/
├── index.html              ← Página principal (no editar)
├── style.css               ← Estilos (no editar a menos que quieras cambiar diseño)
├── data/
│   ├── profile.js          ← ✏️ TUS DATOS PERSONALES
│   ├── research.js         ← ✏️ PUBLICACIONES Y TALKS (BibTeX)
│   ├── group.js            ← ✏️ MIEMBROS DEL GRUPO
│   ├── teaching.js         ← ✏️ CURSOS
│   └── interests.js        ← ✏️ INTERESES
├── js/
│   ├── app.js              ← Lógica de la app (no editar)
│   └── bibtex-parser.js    ← Parser BibTeX (no editar)
└── assets/
    ├── photo.jpg           ← 📷 TU FOTO (reemplazar)
    └── members/            ← 📷 FOTOS DE MIEMBROS (agregar)
```

## Cómo actualizar el contenido

### 1. Datos personales (`data/profile.js`)
Edita el objeto `PROFILE`:
- `name`, `title`, `institution`, `department`
- `email`, `phone`, `office`
- `photo`: ruta a tu foto (pon la imagen en `assets/photo.jpg`)
- `bio`: párrafo de presentación
- `social`: URLs de tus perfiles académicos

### 2. Publicaciones y Talks (`data/research.js`)
- **Temas de investigación**: Edita el array `RESEARCH_TOPICS`. Cada tema tiene un `id` único.
- **Publicaciones**: Escribe tus referencias en formato BibTeX dentro de `PUBLICATIONS_BIBTEX`.
  - Agrega el campo `topic = {id_del_tema}` a cada entrada para clasificarla.
  - Tipos soportados: `@article`, `@inproceedings`, `@book`, `@misc`, etc.
- **Talks**: Escribe tus presentaciones en `TALKS_BIBTEX` como entradas `@misc`.

#### Ejemplo de publicación:
```bibtex
@article{apellido2024titulo,
  author  = {Apellido, Nombre and Coautor, Nombre},
  title   = {Título del artículo},
  journal = {Nombre de la revista},
  year    = {2024},
  volume  = {10},
  pages   = {1--15},
  doi     = {10.XXXX/XXXXX},
  topic   = {topic1}
}
```

#### Ejemplo de talk:
```bibtex
@misc{talk2024nombre,
  author       = {Apellido, Nombre},
  title        = {Título de la charla},
  howpublished = {Keynote, Nombre del Evento},
  year         = {2024},
  month        = {March},
  address      = {Ciudad, País},
  url          = {https://enlace-opcional.com}
}
```

### 3. Grupo de investigación (`data/group.js`)
- Edita `GROUP_INFO` con los datos del grupo.
- Agrega o edita miembros en el array `GROUP_MEMBERS`.
- Para la foto de cada miembro, pon la imagen en `assets/members/` y referencia su ruta.
- Si no hay foto, se mostrará un círculo con las iniciales.

### 4. Cursos (`data/teaching.js`)
- `UNDERGRADUATE_COURSES`: cursos de pregrado.
- `POSTGRADUATE_COURSES`: cursos de posgrado.
- Si tienes un syllabus en línea, agrega la URL en el campo `syllabus`.

### 5. Intereses (`data/interests.js`)
- `INTERESTS_INTRO`: párrafo introductorio.
- `RESEARCH_INTERESTS`: tarjetas con título y descripción de intereses de investigación.
- `OTHER_INTERESTS`: etiquetas de intereses personales.

---

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub (ej. `tu-usuario.github.io` o `dossier`).
2. Sube todos los archivos de esta carpeta.
3. Ve a **Settings → Pages → Source** y selecciona la rama `main` y carpeta `/ (root)`.
4. Tu sitio estará disponible en `https://tu-usuario.github.io` o `https://tu-usuario.github.io/dossier`.

## Agregar tu foto

Reemplaza `assets/photo.jpg` con tu foto. Se recomienda:
- Formato: JPG o PNG
- Tamaño: ~600×800 px (proporción 3:4)
- Peso: < 300 KB

## Cambiar el mensaje del footer

En `index.html`, busca la sección con clase `footer-message` y edita el texto de la cita.

---

*Sitio construido con HTML, CSS y JavaScript puro. Sin dependencias externas.*
