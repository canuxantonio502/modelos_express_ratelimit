import { Router } from 'express';
import { modelos } from '../data/modelosHonor.db.js';

const router = Router();

// GET todos os modelos
router.get('/', (req, res)=>{
    res.status(200).json({
        exito: true,
        total: modelos.length,
        rateLimitInfo: req.rateLimit
            ? {
                limiteVentana: req.rateLimit.limit,
                usados: req.rateLimit.current,
                tokensRestantes: req.rateLimit.remaining,
            }
            : undefined,
        datos: modelos
    });
});


// GET modelo por id
router.get('/:id', (req, res)=>{
    const idBuscado = parseInt(req.params.id, 10);

    if(isNaN(idBuscado)){
        return res.status(404).json({
            exito: false,
            error: 'El parámetro ID debe ser un número entero válido.'
        });
    }

    const modeloEncontrado = modelos.find((m) => m.id === idBuscado);

    if (!modeloEncontrado){
        res.status(404).json({
            exito: false,
            error: `No se encontró ningún modelo con ID ${idBuscado}.`
        });
    }

    res.status(200).json({
        exito: true,
        mensaje: 'Modelo encontrado exitosamente',
        modelo: modeloEncontrado
    });
});


// POST un nuevo modelo
router.post('/', (req, res)=>{
    const { nombre, gama, especificaciones } = req.body;

    const nuevoId = 
        modelos.length > 0
        ? Math.max(...modelos.map((m) => m.id)) + 1
        : 1;

    const nuevoModelo = {
        id: nuevoId,
        nombre: nombre.trim(),
        gama: gama.trim(),
        especificaciones: especificaciones
    };

    modelos.push(nuevoModelo);

    res.status(200).json({
        exito: true,
        mensaje: 'El modelo fue registrado exitosamente.',
        modelo: nuevoModelo
    });
});

// console.log(modelos);

export default router;
