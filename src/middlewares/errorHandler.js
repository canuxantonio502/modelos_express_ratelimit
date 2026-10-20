export function errorHandler(err, req, res, next){
    console.error('[ERROR CAPTURADO EN EL SERVIDOR]:', err.message || err);

    const codigoEstado = err.statusCode || 500;
    const mensaje = err.message || 'Error interno del servidor de modelos.';

    res.status(codigoEstado).json({
        exito: false,
        error: {
            codigo: codigoEstado,
            mensaje: mensaje 
        }
    });
    
};