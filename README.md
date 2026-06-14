# 🦋 Invitación Digital de Quinceañera – Andrea

> Invitación web interactiva y elegante para la celebración de los 15 años de Andrea. Desarrollada con React + Vite, Bootstrap 5 y CSS personalizado.

---

## 🌐 Demo

> Desplegada en **Vercel** → [https://andrea-15.vercel.app](#)

---

## ✨ Características

- 🦋 **Intro animada** con mariposa giratoria y desenfoque de fondo
- 🎨 **Diseño elegante** con tipografías Pinyon Script y Prata
- 📜 **Texto poético** con efecto de aparición al hacer scroll
- 🎵 **Música de fondo** con reproducción automática y fallback en interacción
- 📅 **Cuenta atrás** en tiempo real hasta la fecha del evento
- 🗺️ **Mapa integrado** con Google Maps
- 👗 **Dress Code** visual e informativo
- ✅ **Formulario de confirmación** conectado a Google Sheets
- 🌍 **Bilingüe** (Español / Inglés)
- 📱 **Responsive** adaptado a móviles, tablets y escritorio

---

## 🛠️ Stack Tecnológico

| Tecnología | Uso |
|-----------|-----|
| ⚛️ React 18 | Framework principal |
| ⚡ Vite | Bundler y entorno de desarrollo |
| 🎨 Bootstrap 5 | Grid, acordeón, utilidades |
| 💅 CSS personalizado | Animaciones, diseño y tipografía |
| 🔠 Bootstrap Icons | Iconografía |
| 🗺️ Google Maps | Embed de ubicación |
| 📊 Google Sheets + Apps Script | Backend para formulario |
| ▲ Vercel | Despliegue en producción |

---

## 📁 Estructura del Proyecto

```
src/
├── assets/
│   ├── portada.jfif          # Imagen de fondo de la cabecera
│   └── mariposa.png          # Imagen/GIF de la mariposa intro
│
├── componentes/
│   ├── Cabecera/
│   │   ├── Cabecera.jsx      # Hero con intro de mariposa y blur
│   │   └── Cabecera.css
│   │
│   ├── TextoIntroduccion/
│   │   ├── TextoIntroduccion.jsx  # Poema con animación scroll
│   │   └── TextoIntroduccion.css
│   │
│   ├── Detalles/
│   │   ├── Detalles.jsx      # Acordeón con secciones
│   │   └── Detalles.css
│   │
│   ├── CuentaAtras/
│   │   ├── CuentaAtras.jsx   # Contador en tiempo real + calendario
│   │   └── CuentaAtras.css
│   │
│   ├── Ubicacion/
│   │   ├── Ubicacion.jsx     # Mapa y dirección
│   │   └── Ubicacion.css
│   │
│   ├── DressCode/
│   │   ├── DressCode.jsx     # Código de vestimenta
│   │   └── DressCode.css
│   │
│   ├── ConfirmarAsistencia/
│   │   ├── ConfirmarAsistencia.jsx  # Formulario → Google Sheets
│   │   └── ConfirmarAsistencia.css
│   │
│   ├── Audio/
│   │   └── Audio.jsx         # Música de fondo con autoplay
│   │
│   └── Footer/
│       ├── Footer.jsx        # Despedida + derechos de autor
│       └── Footer.css
│
├── App.jsx
├── App.css
└── index.css

public/
└── audio/
    └── cancion-fondo.mp3     # Música de fondo
```

---

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js >= 18
- npm o pnpm

### Pasos

```bash
# 1. Clona el repositorio
git clone https://github.com/tu-usuario/tu-repositorio.git

# 2. Entra en la carpeta
cd tu-repositorio

# 3. Instala las dependencias
npm install
# o con pnpm
pnpm install

# 4. Inicia el servidor de desarrollo
npm run dev
# o
pnpm dev
```

### Build para producción

```bash
npm run build
# o
pnpm build
```

---

## ⚙️ Configuración

### 1. Imagen de portada y mariposa

Coloca tus archivos en:
```
src/assets/portada.jfif   ← Imagen de fondo del hero
src/assets/mariposa.png   ← Imagen o GIF de la mariposa
```

### 2. Música de fondo

Coloca tu archivo de audio en:
```
public/audio/cancion-fondo.mp3
```

### 3. Google Sheets (Confirmación de Asistencia)

1. Crea una hoja de cálculo en Google Sheets con estas columnas:
   ```
   Timestamp | Familia | Asistencia | Nº Personas | Nombres
   ```

2. Ve a **Extensiones → Apps Script** y pega el siguiente código:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.familia || '',
    data.asistencia || '',
    data.numPersonas || '',
    data.nombres || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Haz clic en **Implementar → Nueva implementación**:
   - Tipo: **Aplicación web**
   - Ejecutar como: **Yo**
   - Acceso: **Cualquier persona**

4. Copia la URL generada y pégala en `ConfirmarAsistencia.jsx`:
```js
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/TU_ID/exec'
```

### 4. Google Maps

En `Ubicacion.jsx`, reemplaza el `src` del iframe con el embed de tu ubicación:
```jsx
<iframe
  src="https://www.google.com/maps/embed?pb=TU_EMBED_URL"
  ...
/>
```

---

## 🎨 Fuentes utilizadas

Importadas desde Google Fonts en `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Pinyon+Script&family=Prata&display=swap" rel="stylesheet">
```

| Fuente | Uso |
|--------|-----|
| **Pinyon Script** | Títulos, nombre, firma |
| **Prata** | Párrafos y textos secundarios |

---

## 🔤 Iconos

Bootstrap Icons cargados desde CDN en `index.html`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
```

---

## 📱 Compatibilidad

| Dispositivo | Estado |
|------------|--------|
| iPhone SE | ✅ |
| iPhone 12/13/14 | ✅ |
| Redmi Note 12 Pro 5G | ✅ |
| Samsung Galaxy S20+ | ✅ |
| iPad / Tablets | ✅ |
| Desktop (1080p+) | ✅ |

---

## 🚢 Despliegue en Vercel

```bash
# Con Vercel CLI
npm i -g vercel
vercel

# O conectando el repositorio directamente en vercel.com
```

> ⚠️ Si usas `pnpm`, asegúrate de incluir un archivo `.npmrc` en la raíz con:
> ```
> shamefully-hoist=true
> ```

---

## 📄 Licencia y Derechos de Autor

```
© 2025 Alejandro Bermúdez – Todos los derechos reservados.

Este proyecto, incluyendo su diseño, código fuente y assets,
es propiedad exclusiva del autor.

Queda prohibida su reproducción, distribución o uso comercial
total o parcial sin autorización expresa por escrito del autor.
```

---

## 👨‍💻 Autor

**Alejandro Bermúdez**  
Desarrollador Web · InvitAle  
📍 Murcia, España

---

*Crafted with passion 💙*
