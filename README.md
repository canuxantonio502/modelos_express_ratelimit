<div align="center">

# Modelos Express Rate Limit

API REST con **Node.js** y **Express 5** para gestionar un catálogo de modelos HONOR, con **limitación de peticiones (rate limiting)** por IP.

![Node.js](https://img.shields.io/badge/Node.js-ESM-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.x-000000?logo=express&logoColor=white)
![express-rate-limit](https://img.shields.io/badge/express--rate--limit-8.x-blue)
![License](https://img.shields.io/badge/License-ISC-lightgrey)

</div>

---

## Características

- CRUD completo de modelos de teléfonos (datos en memoria).
- **Rate limiting** global y específico por endpoint, con cabeceras estándar (`draft-7`).
- Validación del cuerpo de las peticiones.
- Middlewares de *logging* y manejo centralizado de errores.
- Respuestas 404 y 429 en formato JSON.

## Stack

| Tecnología | Uso |
|---|---|
| Node.js (ES Modules) | Entorno de ejecución |
| Express `^5.3.0` | Framework web |
| express-rate-limit `^8.7.1` | Control de tasa de peticiones |
| nodemon `^3.1.14` | Recarga en desarrollo |

## 🚀 Inicio rápido

```bash
git clone https://github.com/canuxantonio502/modelos_express_ratelimit.git
cd modelos_express_ratelimit
npm install
npm run dev
```

El servidor queda disponible en **http://localhost:3000**.

## 📂 Estructura

```
src/
├── app.js                  # Configuración y arranque del servidor
├── data/modelosHonor.db.js # Datos de ejemplo en memoria
├── middlewares/
│   ├── errorHandler.js     # Manejo global de errores
│   ├── logger.js           # Log de peticiones
│   ├── rateLimiter.js      # Límites de tasa
│   └── validator.js        # Validación del body
└── routes/modelos.routes.js
```

## Endpoints

Base: `/api/modelos`

| Método | Ruta | Descripción | Límite |
|---|---|---|---|
| `GET` | `/` | Lista todos los modelos | Global |
| `GET` | `/:id` | Obtiene un modelo por ID | Global |
| `POST` | `/` | Crea un modelo | **3 / min** |
| `PUT` | `/:id` | Actualiza un modelo | Global |
| `DELETE` | `/:id` | Elimina un modelo | Global |

### Ejemplo de cuerpo (`POST` / `PUT`)

```json
{
  "nombre": "HONOR Magic8 Pro",
  "gama": "Alta / Premium",
  "especificaciones": {
    "pantalla": "AMOLED de 6.7 pulgadas, 120Hz",
    "memoria_ram": "12 GB"
  }
}
```

> `nombre` y `gama` deben ser texto no vacío; `especificaciones` un objeto no vacío cuyos valores sean texto.

## Rate Limiting

| Limitador | Alcance | Ventana | Máx. peticiones |
|---|---|---|---|
| `apiLimit` | Todo `/api/` | 60 s | 10 |
| `crearModeloLimit` | `POST /api/modelos` | 60 s | 3 |

Al excederlo se responde con **`429 Too Many Requests`** y un JSON explicativo. Las cabeceras `RateLimit-*` informan del estado del límite, y `GET /api/modelos` incluye además `rateLimitInfo` en la respuesta.

## Notas

- Los datos viven en memoria: se reinician al reiniciar el servidor.
- El puerto (`3000`) está fijo en `src/app.js`.
- Actualmente no hay pruebas automatizadas (`npm test` es un placeholder).

## 📄 Licencia

ISC


## :feather: Autores
He aquí los responsables de que este proyecto se haya podido llevar a cabo:

* **Antonio Canux** - *Único colaborador* - [canuxantonio502](https://github.com/canuxantonio502)

### Trainers
* **Eduin Salas** - *Trainer Colombia* - [esalascampuslands](https://github.com/esalascampuslands)
* **Andre Lopez** - *Trainer Guatemala* - [anndreloopez012](https://github.com/anndreloopez012)