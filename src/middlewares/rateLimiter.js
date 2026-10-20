import { rateLimit } from 'express-rate-limit';

export const apiLimit = rateLimit({
    windowMs: 60*1000,
    limit: 10,
    statusCode: 429,
    standardHeaders: 'draft-7',
    legacyHeaders: true,
    message: {
        exito: false,
        status: 429,
        error: 'Demasiadas solicitudes desde esta IP, por favor intenta nuevamente en un minuto.',
        detalle: 'Has agotado tus 10 tokens disponibles en la ventana actual de 60 segundos.'
    }
});

export const crearModeloLimit = rateLimit({
    windowMs: 60*1000,
    limit: 3,
    statusCode: 429,
    standardHeaders: 'draft-7',
    legacyHeaders: true,
    message: {
        exito: false,
        status: 429,
        error: 'Ya has chambeado demasiado, descansa mi rey, dale suave.',
        detalle: 'Aprovecha este breve descando de un minuto, en lo que se refresca tu conteo de tokens.'
    }
});