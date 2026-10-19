import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    res.send('Bienvenido a mi aplicación, aun estamos en progreso...');
});

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Servicio inicializado en http://localhost:${PORT}`);
});
