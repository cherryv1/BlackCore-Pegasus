// Marcador de Autoría: Baxto Style Tattoo / Cherry V3
const express = require('express');
const statusRoutes = require('./src/routes/statusRoutes');
const iaRoutes = require('./src/routes/iaRoutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', iaRoutes);
app.use('/', statusRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Motor BlackCore Pegasus escuchando en el puerto ${PORT}`);
});
