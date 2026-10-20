export function validarModelos(req, res, next){
    if(!req.body || typeof req.body !== 'object'){
        return res.status(400).json({
            exito: false,
            error: 'Se requiere enviar un cuerpo JSON válido.'
        })
    }

    const { nombre, gama, especificaciones } = req.body;

    if(!nombre || typeof nombre !== 'string' || nombre.trim().length === 0){
        return res.status(400).json({
            exito: false,
            error: 'El campo "nombre" del modelo es obligatorio.'
        });
    }

    if(!gama || typeof gama !== 'string' || gama.trim().length === 0){
        return res.status(400).json({
            exito: false,
            error: 'El campo "gama" del modelo es obligatorio.'
        });
    }

    if (!Array.isArray(especificaciones) || especificaciones.lengt === 0 || especificaciones.some(
        (item) => typeof item !== 'string' || item.trim().length === 0
        )
    ) {
        return res.status(400).json({
            exito: false,
            error: 'El campo "especificaciones" debe ser un array no vacío de textos.'
        });
    }
    next();
};