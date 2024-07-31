const express = require('express');
const app = express();

app.use(express.json());

const usuario = [
    {ID: 1, name: 'Sergio', email: 'sergioparradosc@gmail.com' , password: '0104' },
    {ID: 2, name: 'Juana' , email: 'juanacorreo@gmail.com' , password: '0909'},
    {ID: 3, name: 'Miguel' , email: 'miguelcorreo@gmail.com' , password: '4545'},
    {ID: 4, name: 'Felipe' , email: 'felipecorreo@gmail.com' , password: 'felipe01'},
];

app.get('/', (req, res) =>{
    res.send('Bienvenido a Node JS API, desarrollado por Sergio Parrado Rojas - ADSO 2024');
})

app.get('/api/usuario', (req, res)=>{
    res.send(usuario);
})

app.get('/api/usuario/:id', (req, res)=>{
    const usuario = uaurio.find(c => c.id === parseInt(req.params.id));
    if(!usuario) return res.status(404).send('Usuario no encontrado');
    else res.send(usuario);
})

app.post('/api/usuario', (req, res)=>{
    const usuario = {
        ID: usuario.length + 1,
        name: req.body.name,/*  */
        email: parseInt(req.body.email),
        password: parseInt(req.body.password)
    }

    usuario.push(usuario);
    res.send(usuario + 'Usuario agregado');
});

const port = process.env.port || 80;
app.listen(port, ()=> console.log('Accediendo a puerto de la API...'));