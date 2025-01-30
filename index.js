const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta para obtener el JSON almacenado localmente
app.get('/data', (req, res) => {
    const jsonPath = path.join(__dirname, 'products.json');
    
    fs.readFile(jsonPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error al leer el archivo JSON' });
        }
        res.json(JSON.parse(data));
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
