const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Endpoint 1: Respuesta por defecto con "Hola Mundo"
app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

// Endpoint 2: Respuesta personalizada con el nombre pasado como parámetro
app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send(`Hola ${nombre}`);
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
