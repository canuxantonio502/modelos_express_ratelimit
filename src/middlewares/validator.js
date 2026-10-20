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

    if ( typeof especificaciones !== 'object' || especificaciones === null || Array.isArray(especificaciones) || Object.keys(especificaciones).length === 0 || Object.values(especificaciones).some(
        (value) => typeof value !== 'string' || value.trim().length === 0
        )
    ) {
        return res.status(400).json({
            exito: false,
            error: 'El campo "especificaciones" debe ser un array no vacío de textos.'
        });
    }
    next();
};