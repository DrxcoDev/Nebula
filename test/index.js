// Importar el módulo Express
const express = require('express');

// Crear una aplicación Express
const app = express();

// Definir una ruta para la raíz
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/base/index.html');
});

// Definir el puerto
const PORT = 8080;

// Iniciar el servidor en el puerto especificado
app.listen(PORT, () => {
    console.log(`Servidor Express iniciado en el puerto ${PORT}`);
});
