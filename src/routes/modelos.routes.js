import { Router } from 'express';
import { modelos } from '../data/modelosHonor.db.js';
import { validarModelos } from '../middlewares/validator.js';

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
router.post('/', validarModelos, (req, res)=>{
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


// PUT para actualizar un modelo ya existente
router.put('/:id', validarModelos, (req, res)=>{
    const idBuscado = parseInt(req.params.id, 10);

    if(isNaN(idBuscado)){
        return res.status(404).json({
            exito: false,
            error: 'El parámetro ID deber ser un número entero válido.'
        });
    }

    const indice = modelos.findIndex((m) => m.id === idBuscado);

    if(indice === -1){
        return res.status(404).json({
            exito:false,
            error: `No se puede actualizar: No se encontró ningún modelo con id ${idBuscado}.`
        });
    }

    const { nombre, gama, especificaciones } = req.body;

    modelos[indice] = {
        id: idBuscado,
        nombre: nombre.trim(),
        gama: gama.trim(),
        especificaciones: especificaciones
    };

    res.status(200).json({
        exito: true,
        mensaje: 'Modelo actualizado correctamente.',
        modelo: modelos[indice]
    });
});


// DELETE para borrar un modelo
router.delete('/:id', (req, res)=> {
    const idBuscado = parseInt(req.params.id, 10);

    if(isNaN(idBuscado)){
        res.status(404).json({
            exito: false,
            error: `No se encontró ningun modelo con ID ${idBuscado}.`
        });
    }

    const indice = modelos.findIndex((m)=> m.id === idBuscado);

    if(indice === -1){
        return res.status(404).json({
            exito:false,
            error: `No se puede eliminar: No se encontró ningún modelo con id ${idBuscado}.`
        });
    }

    const [modeloEliminado] = modelos.slice(indice, 1);

    res.status(200).json({
        exito: true,
        mensaje: 'Modelo elimindado exitosamente',
        modelo: modeloEliminado
    });
});

// console.log(modelos);

export default router;
