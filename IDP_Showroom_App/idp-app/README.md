# IDP · Showroom Digital — Guía rápida

App lista para usar. Identidad ámbar/carbón, escudo IDP, 4 sistemas, Modo Pitch y fichas PDF.

## Cómo usarla en Lovable
1. Subí esta carpeta a tu proyecto de Lovable (o pegá los archivos respetando las rutas).
2. Lovable instala las dependencias solo. Si te pide, corré `npm install`.
3. Listo: la app arranca en la pantalla de entrada.

## CÓMO CARGAR TUS VIDEOS Y FOTOS (lo único que tenés que tocar)
Abrí **un solo archivo**: `src/data/systems.js`

### Videos
Subí cada video a YouTube (podés ponerlo "no listado") o a Google Drive.
Copiá el link y pegalo entre las comillas. Ejemplos válidos:
- `https://youtu.be/ABC123`
- `https://www.youtube.com/watch?v=ABC123`
- link de Google Drive

```js
videos: [
  { title: "Tablero S.I.T. en vivo", url: "https://youtu.be/TU_VIDEO" },
],
```

### Fotos
Pegá hasta 5 URLs de imágenes (de tu hosting, Drive público, Imgur, etc.):
```js
photos: ["https://...foto1.jpg", "https://...foto2.jpg"],
```

### Video de intro (opcional)
En la última línea de `systems.js`:
```js
export const INTRO_VIDEO = "https://youtu.be/TU_INTRO";
```
Si lo dejás vacío `""`, la app arranca directo en la entrada.

## CONTACTO
También en `systems.js`, arriba de todo (`CONTACT`):
- `whatsapp`: tu número sin + ni espacios (ya está el tuyo: 5493415041807)
- `email`: cambiá `contacto@idp.com` por tu email real

## PDFs
Los 4 PDFs ya están en `public/`. El botón "DESCARGAR FICHA TÉCNICA" en cada
sistema los entrega solo. Si querés editarlos, reemplazá los archivos
`public/IDP_*_ficha.pdf`.

## Estructura
- `src/data/systems.js` ← TODO lo editable (textos, datos, videos, fotos, contacto)
- `src/pages/` ← pantallas (entrada, sistema, pitch)
- `src/components/` ← piezas reutilizables
- `public/` ← los PDFs

Ingeniería por G. Inseo · IDP Vehicle Integrity Standard · MK-1 / 2026
