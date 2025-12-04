const express = require('express');
const statusRoutes = require('./src/routes/statusRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Rutas
app.use('/', statusRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Motor BlackCore Pegasus escuchando en el puerto ${PORT}`);
});
