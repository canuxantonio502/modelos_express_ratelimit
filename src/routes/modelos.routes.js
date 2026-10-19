import { Router } from 'express';
import { modelos } from '../data/modelosHonor.db.js';

const router = Router();

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

// console.log(modelos);

export default router;
