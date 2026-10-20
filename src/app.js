import express from 'express';
import modelosRouter from './routes/modelos.routes.js';
import { apiLimit } from './middlewares/rateLimiter.js';
import { logger } from './middlewares/logger.js';


const app = express();

app.use(express.json());
app.use(logger);

app.get('/', (req, res)=>{
    res.send('Bienvenido a mi aplicación, aun estamos en progreso...');
});

app.use('/api/', apiLimit)

app.use('/api/modelos', modelosRouter)

const PORT = 3000;

app.use((req, res)=>{
    res.status(404).json({
        exito: false,
        error: `La ruta ${req.method} no existe dentro del servidor de modelos.`
    });
});

app.listen(PORT, ()=>{
    console.log(`Servicio inicializado en http://localhost:${PORT}`);
});
